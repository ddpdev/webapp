/**
 * Created by ms.kim2 on 2016-08-28.
 */


'use strict';

import type { Action } from './Types';

import ItemControl from '../controller/ItemListControl';
const service = new ItemControl();

const maxAgeInSeconds = (10 * 60); // 10 minutes

function getAllItemList() {
  return (dispatch: any) => {
    service.getAllItemList(false).then(
      (result) => {
        dispatch({
          type: 'ITEMLIST_GET_ALL',
          data: result
        });

        var dates = result.map((item) => item.freshness);
        var freshness = new Date(Math.min(...dates));
        if (getAgeInSeconds(freshness) > maxAgeInSeconds) {
          dispatch(setItemListRefreshing());
          dispatch(forceItemListUpdate());
        }
      }
    );
  };
}

async function forceItemListUpdate() {
  var result = await service.getAllItemList(true);
  return {
    type: 'ITEMLIST_GET_ALL',
    data: result
  };
}

function getAgeInSeconds(freshness: Date) {
  return Math.floor((Date.now() - freshness.getTime()) / 1000);
}

function setItemListLoading() {
  return {
    type: 'ITEMLIST_SET_LOADING'
  };
}

function setItemListRefreshing() {
  return {
    type: 'ITEMLIST_SET_REFRESHING'
  };
}

module.exports = {
  getAllItemList,
  setItemListLoading,
  setItemListRefreshing
}
