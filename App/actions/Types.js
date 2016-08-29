/**
 * Created by ms.kim2 on 2016-08-28.
 */
'use strict';

import type { ItemListModel, ItemInfo, ImageInfo } from '../realm/models/ItemListModel';

export type Action =
  { type: 'ITEMLIST_SET_LOADING' }
  | { type: 'ITEMLIST_SET_REFRESHING' }
  | { type: 'ITEMLIST_GET_ALL', data: Array<ItemListModel> }
  | { type: 'ITEMLIST_INITIALISED' }
  | { type: 'ITEM_GET_ALL', data: Array<ItemInfo> }
  | { type: 'ITEM_CLEAR_ALL_DATA' }
  | { type: 'ITEM_DELETE' }
  | { type: 'ITEM_ADD' }
  | { type: 'IMAGE_SEARCH', data: Array<ImageInfo> }
  | { type: 'IMAGE_CLEAR' };
