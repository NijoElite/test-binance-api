import React, { useState, useCallback, useEffect, useReducer } from 'react';
import core from '../../libs/core/core';
import { cn } from '@bem-react/classname';
import { Table, TableHead, TableRow, TableHeadCell, TableBody, TableCell } from '../../components/Table/Table';
import { formatNumber } from '../../libs/helpers';

import './Diff.scss';

const cnDiff = cn('Diff');

const reducer = (diffs, action) => {
  switch (action.type) {
    case 'append': {
      const asks = [...action.newDiffs.asks, ...diffs.asks].slice(0, 100);
      const bids = [...action.newDiffs.bids, ...diffs.bids].slice(0, 100);
      return { asks, bids };
    }
    case 'clear':
      return { asks: [], bids: [] };
  }
};

const formatDiffNumber = (num, fractionDigits) => {
  const fixedNum = formatNumber(num, fractionDigits);
  return (num < 0 ? fixedNum : `+${fixedNum}`);
};

const Diff = props => {
  const binance = core.getPlugin('binance');
  const bus = core.getPlugin('bus');
  const symbols = binance.getAvailableSymbols();

  const [symbol, setSymbol] = useState(symbols[0]);
  const [diffs, dispatchDiffUpdate] = useReducer(reducer, { asks: [], bids: [] });

  const fractionDigits = 8;

  useEffect(() => {
    bus.trigger('symbol:change', symbol);
    dispatchDiffUpdate({ type: 'clear' });
  }, [bus, symbol]);

  const onDiffUpdate = useCallback(newDiffs => {
    dispatchDiffUpdate({
      type: 'append',
      newDiffs,
    });
  }, []);

  useEffect(() => {
    bus.addEventListener('diff:update', onDiffUpdate);
    return () => bus.removeEventListener('diff:update', onDiffUpdate);
  }, [bus, onDiffUpdate]);

  const onSymbolChange = useCallback(e => {
    setSymbol(e.target.value);
  }, []);

  if (!props.enabled) return null;

  const mapDiffsToRows = (data, i) => {
    const [price, prevAmout] = data.prev;
    const [, nextAmout] = data.next;
    const amountDiff = (prevAmout || 0) - (nextAmout || 0);

    return (
      <TableRow key={i}>
        <TableCell>{formatNumber(price, fractionDigits)}</TableCell>
        <TableCell align="center" color={amountDiff > 0 ? 'green' : 'red'}>{formatDiffNumber(amountDiff, fractionDigits)}</TableCell>
      </TableRow>
    );
  };

  const asksDiffs = diffs.asks.map(mapDiffsToRows);
  const bidsDiffs = diffs.bids.map(mapDiffsToRows);

  const getHead = title => {
    return (
      <TableHead>
        <TableRow>
          <TableHeadCell colSpan="2">{title}</TableHeadCell>
        </TableRow>
        <TableRow>
          <TableHeadCell>Price</TableHeadCell>
          <TableHeadCell>Amount Diff</TableHeadCell>
        </TableRow>
      </TableHead>
    );
  };

  return (
    <div className={cnDiff()}>
      <div className={cnDiff('SymbolContainer')}>
        <label>
          <span>Select New Symbol: </span>
          <select onChange={onSymbolChange} value={symbol}>
            {symbols.map(symbol => <option key={symbol} value={symbol}>{symbol}</option>)}
          </select>
        </label>
      </div>

      <div className={cnDiff('ListsContainer')}>
        <Table>
          {getHead('Bids')}
          <TableBody>
            {bidsDiffs}
          </TableBody>
        </Table>

        <Table>
          {getHead('Asks')}
          <TableBody>
            {asksDiffs}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

Diff.displayName = 'Diff';

export default Diff;
