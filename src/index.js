import React from 'react';
import ReactDOM from 'react-dom';

import core from './libs/core/core';
import binance from './libs/core/plugins/binance/binance';
import bus from './libs/core/plugins/bus/bus';

import App from './App';

core.setPlugin('binance', binance);
core.setPlugin('bus', bus);

ReactDOM.render(<App/>, document.getElementById('root'));
