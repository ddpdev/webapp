/**
 * Created by ms.kim2 on 2016-08-25.
 */

'use strict';

const ImageInfo = {
  name: 'ImageInfo',
  properties: {
    bucket: 'string',
    uploadfilename: 'string',
    filesize: 'int',
    imagefilename: 'string',
    imagekey: 'string',
    thumbfilename: 'string',
    thumbfilekey: 'string'
  }
};

const ItemInfo = {
  name: 'ItemInfo',
  primaryKey: 'item_id',
  properties: {
    item_id: 'string',
    item_type: 'string',
    last_date: 'date',
    item_value: {
      type:'ImageInfo'
    },
    item_status: 'string'
  }
};

const ItemList = {
  name: 'ItemList',
  properties: {
    imageType :'string',
    imageCount: 'int',
    data: {
      type: 'list',
      objectType: 'itemInfo'
    }
  }
};

module.exports = {
  schema: [ImageInfo, ItemInfo, ItemList],
  schemaVersion: 2,
  migration: () => {}
};