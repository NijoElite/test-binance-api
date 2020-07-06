const REST_API_URL = 'https://api.binance.com/api';
const RES_API_VERSION = 'v3';

const WSS_BASE_URL = 'wss://stream.binance.com:9443/stream';

const getRestEndpointUrl = method => `${REST_API_URL}/${RES_API_VERSION}/${method}`;

class BinanceAPI {
  constructor() {
    this._socket = null;
    this._wssId = 0;

    this._onSocketOpen = this._onSocketOpen.bind(this);
    this._onSocketMessage = this._onSocketMessage.bind(this);

    this._streamCallbacks = new Map();

    this._openSocket();
  }

  _openSocket() {
    this._socket = new WebSocket(WSS_BASE_URL);
    this._socket.addEventListener('open', this._onSocketOpen);
    this._socket.addEventListener('message', this._onSocketMessage);
  }

  _onSocketOpen() {
  }

  _onSocketMessage(e) {
    const json = JSON.parse(e.data);
    const { stream, data } = json;

    if (!stream) return;

    const callbacks = this._streamCallbacks.get(stream) ?? [];

    callbacks.forEach(cb => cb(data, stream));
  }

  getAvailableSymbols() {
    return ['BTCUSDT', 'BNBBTC', 'ETHBTC'];
  }

  unsubscribeWSS(streams) {
    const streamNamesArr = [];

    if (this._socket.readyState !== WebSocket.OPEN) return;

    Object.entries(streams).forEach(([streamName, cb]) => {
      const subscription = this._streamCallbacks.get(streamName);

      if (!subscription) return;

      subscription.delete(cb);

      if (subscription.size === 0) {
        streamNamesArr.push(streamName);
      }
    });

    if (streamNamesArr.length === 0) return;

    const subscribeArgs = {
      method: 'UNSUBSCRIBE',
      params: streamNamesArr,
      id: this._wssId++,
    };

    const args = JSON.stringify(subscribeArgs);

    this._socket.send(args);
  }

  subscribeWSS(streams) {
    const streamNamesArr = [];

    Object.entries(streams).forEach(([streamName, cb]) => {
      if (!this._streamCallbacks.has(streamName)) {
        this._streamCallbacks.set(streamName, new Set());
      }

      streamNamesArr.push(streamName);

      this._streamCallbacks.get(streamName).add(cb);
    });

    if (streamNamesArr.length === 0) return;

    const subscribeArgs = {
      method: 'SUBSCRIBE',
      params: streamNamesArr,
      id: this._wssId++,
    };

    const args = JSON.stringify(subscribeArgs);

    const timeout = setInterval(() => {
      if (this._socket.readyState !== WebSocket.OPEN) return;

      this._socket.send(args);
      clearInterval(timeout);
    }, 300);
  }

  async getDepth(symbol, limit = 100) {
    if (!symbol) {
      throw new Error('Symbol must be specified!');
    }

    return this._ajax('depth', {
      requestParams: { method: 'GET' },
      ajaxParams: {
        query: { symbol, limit },
      },
    });
  }

  async _ajax(endpoint, { requestParams, ajaxParams }) {
    const url = new URL(getRestEndpointUrl(endpoint));
    const fetchParams = { ...requestParams };

    if (ajaxParams.query) {
      url.search = new URLSearchParams(ajaxParams.query);
    }

    if (ajaxParams.body) {
      fetchParams.body = new URLSearchParams(ajaxParams.body);
    }

    if (ajaxParams.json) {
      fetchParams.body = JSON.stringify(ajaxParams.json);
      fetchParams.headers['Content-Type'] = 'application/json';
    }

    try {
      const response = await fetch(url, fetchParams);
      const data = await response.json();

      if (!response.ok) {
        return { error: data };
      }

      return { json: data };
    } catch (err) {
      return { error: { msg: 'Network Error' } };
    }
  }
}

export default new BinanceAPI();
