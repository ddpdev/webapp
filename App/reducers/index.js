/**
 * Created by leesy on 2016-08-26.
 */

'use strict';

var { combineReducers } = require('redux');

module.exports = combineReducers({
    itemlist: require('./ItemListReducer'),
    //location: require('./location'),
    //postcode: require('./postcode')
});