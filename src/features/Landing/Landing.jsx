import React from 'react';
import core from '../../libs/core/core';
import { Table, TableHead, TableHeadCell, TableRow, TableCell, TableBody } from '../../components/Table/Table';
import { cn } from '@bem-react/classname';

import './Landing.scss';
import { formatNumber } from '../../libs/helpers';

const cnLanding = cn('Landing');

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.binance = core.getPlugin('binance');
    this.bus = core.getPlugin('bus');

    this.state = {
      bids: [],
      asks: [],
      lastUpdateId: null,
      selectedSymbol:   this.binance.getAvailableSymbols()[0],
    };

    this.subscription = null;

    this.onSymbolChanged = this.onSymbolChanged.bind(this);
    this.onDepthUpdate = this.onDepthUpdate.bind(this);
    this.onMediaChange = this.onMediaChange.bind(this);
  }

  componentWillUnmount() {
    this.bus.removeEventListener('symbol:change', this.onSymbolChanged);
    this.mql.removeEventListener(this.onMediaChange);
    this.unsubscribeWSS();
  }

  componentDidMount() {
    this.updateDepth();
    this.subscribeWSS();

    this.bus.addEventListener('symbol:change', this.onSymbolChanged);

    this.mql = window.matchMedia('(max-width: 700px)');

    this.mql.addListener(this.onMediaChange);

    this.setState({ ...this.state, isMobile: this.mql.matches });
  }

  onMediaChange(e) {
    this.setState({ ...this.state, isMobile: e.matches });
  }

  onDepthUpdate(data) {
    const { selectedSymbol, lastUpdateId } = this.state;

    if (data.s !== selectedSymbol) return;
    if (data.u <= lastUpdateId) return;

    const { b: bidsToUpdate, a: asksToUpdate } = data;
    const partialState = {
      bids: [...this.state.bids],
      asks: [...this.state.asks],
    };

    const busMessage = {
      asks: [],
      bids: [],
    };

    const updateFn = (arrWithUpdates, result, bus) => {
      for (let i = 0; i < arrWithUpdates.length; i++) {
        const [price, qty] = arrWithUpdates[i];
        const index = result.findIndex(([elementPrice]) => elementPrice === price);

        // Новое значение
        if (index === -1) {
          if (Number(qty) !== 0) {
            busMessage[bus].push({
              type: 'create',
              prev: [price, 0],
              next: [price, qty],
            });

            result.push([price, qty]);
          }

          continue;
        }

        const [curPrice, curQty] = result[index];

        // Нужно удалить, если amount (qty) = 0
        if (Number(qty) === 0) {
          result.splice(index, 1);

          busMessage[bus].push({
            type: 'delete',
            prev: [curPrice, curQty],
            next: [curPrice, 0],
          });

          continue;
        }

        busMessage[bus].push({
          type: 'update',
          prev: [curPrice, curQty],
          next: [price, qty],
        });

        result[index] = [price, qty];
      }
    };

    updateFn(bidsToUpdate, partialState.bids, 'bids');
    updateFn(asksToUpdate, partialState.asks, 'asks');

    this.bus.trigger('diff:update', busMessage);

    this.setState({ ...this.state, ...partialState });
  }

  unsubscribeWSS() {
    this.subscription && this.binance.unsubscribeWSS(this.subscription);
  }

  subscribeWSS() {
    const { selectedSymbol } = this.state;
    const streamName = `${selectedSymbol.toLowerCase()}@depth@1000ms`;

    if (this.subscription?.[streamName]) {
      return;
    }

    this.unsubscribeWSS();

    this.subscription = { [streamName]: this.onDepthUpdate };
    this.binance.subscribeWSS(this.subscription);
  }


  onSymbolChanged(symbol) {
    this.setState({ ...this.state, selectedSymbol: symbol }, () => {
      this.subscribeWSS();
      this.updateDepth();
    });
  }

  updateDepth() {
    const getDepth = async () => {
      const depth = await this.binance.getDepth(this.state.selectedSymbol, 100);

      if (!depth.json) return;

      this.setState({ ...this.state, ...depth.json });
    };

    getDepth();
  }

  render() {
    if (!this.props.enabled) return null;

    const { bids, asks, isMobile } = this.state;

    const rows = [];
    const rowsCount = Math.max(bids.length, asks.length);

    const sortedBids = [...bids].sort((a, b) => b[0] - a[0]);
    const sortedAsks = [...asks].sort((a, b) => a[0] - b[0]);

    const fractionDigits = 8;
    const formatStr = str => formatNumber(str, fractionDigits);

    for (let i = 0; i < rowsCount; i++) {
      const [askPrice, askQty] = sortedAsks[i] ?? [];
      const [bidPrice, bidQty] = sortedBids[i] ?? [];

      const bidTotal = (bidPrice && bidQty) ? formatStr(bidPrice * bidQty) : null;
      const askTotal = (askPrice && askQty) ? formatStr(askPrice * askQty) : null;

      rows.push(
        <TableRow key={i}>
          <TableCell align="left">{formatStr(bidQty)}</TableCell>
          <TableCell color="red" borderRight={isMobile}>{formatStr(bidPrice)}</TableCell>
          {!isMobile && <TableCell align="right" borderRight>{formatStr(bidTotal)}</TableCell>}

          {!isMobile && <TableCell align="left" borderLeft>{formatStr(askTotal)}</TableCell>}
          <TableCell color="green" borderLeft={isMobile}>{formatStr(askPrice)}</TableCell>
          <TableCell align="right">{formatStr(askQty)}</TableCell>
        </TableRow>
      );
    }

    return (
      <div className={cnLanding()}>
        <Table className={cnLanding('Table')}>
          <TableHead>
            <TableRow>
              <TableHeadCell colSpan={isMobile ? '2' : '3'}>Bids</TableHeadCell>
              <TableHeadCell colSpan={isMobile ? '2' : '3'}>Asks</TableHeadCell>
            </TableRow>
            <TableRow>
              <TableHeadCell>Amount</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              {!isMobile && <TableHeadCell>Total</TableHeadCell>}
              {!isMobile && <TableHeadCell>Total</TableHeadCell>}
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell>Amount</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </div>
    );
  }
}


export default Landing;
