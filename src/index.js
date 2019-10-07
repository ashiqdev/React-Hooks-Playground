import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Practice from './Practice';
import Test from './Form/Test';
import UseEffect from './Form/UseEffect/Index';
import UseRef from './UseRef/Index';
import UseMemo from './UseOfFetch/App';
import UseReducer from './useReducer/App';
import Deep from './useReducer/Deep';
import UseContextHook from './useContext/App';
import UseCallback from './useCallback(bujhi na)/Test';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<UseRef />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
