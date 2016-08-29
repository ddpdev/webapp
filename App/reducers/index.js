/**
 * Created by leesy on 2016-08-26.
 */

'use strict';

import { combineReducers }  from 'redux';
import routes  from './Routes';
import itemlist  from './ItemListReducer';

module.exports = combineReducers({
    routes,
    itemlist,
});