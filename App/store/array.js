/**
 * Created by leesy on 2016-08-30.
 */
'use strict';

module.exports = store => next => action =>
    Array.isArray(action)
        ? action.map(next)
        : next(action);