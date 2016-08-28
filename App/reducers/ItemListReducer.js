/**
 * Created by ms.kim2 on 2016-08-28.
 */


'use strict';

import type { Action } from '../actions/types';
import type { ItemListModel } from '../realm/models/ImageModel';

export type State = {
  isLoading: bool;
  isRefreshing: bool;
  data: Array<ItemListModel>;
  current: number;
};

const initial: State = {
  isLoading: false,
  isRefreshing: false,
  data: [],
  current: 0
};

function ItemList(state: State = initial, action: Action): State {
  switch (action.type) {
    case 'ITEMLIST_SET_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'ITEMLIST_SET_REFRESHING':
      return {
        ...state,
        isRefreshing: true
      };
    case 'ITEMLIST_GET_ALL':
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        data: action.data,
      };
    default:
      return state;
  }
}

module.exports = ItemList;

