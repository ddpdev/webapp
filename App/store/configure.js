/**
 * Created by leesy on 2016-08-26.
 */


'use strict';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
//import devTools from 'remote-redux-devtools';

import reducers from '../reducers';
import promise from './promise';
//import array from './array';

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

var logger = createLogger({
    predicate: (getState, action) => isDebuggingInChrome,
    collapsed: true,
    duration: true,
});
var store = applyMiddleware(thunk, promise, logger)(createStore)(reducers);

function configureStore() {

    if (isDebuggingInChrome) {
        window.store = store;
    }

    return store;
}

module.exports = configureStore;