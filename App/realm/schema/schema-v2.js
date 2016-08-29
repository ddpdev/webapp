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
    itemid: 'int',
    itemtype: 'string',
    lastdate: 'date',
    itemvalue: {
      type:'ImageInfo'
    },
    item_status: 'string'
  }
};

const ItemList = {
  name: 'ItemList',
  properties: {
    imagetype :'string',
    imagecount: 'int',
    iteminfo: {
      type: 'list',
      objectType: 'ItemInfo'
    }
  }
};

module.exports = {
  schema: [ImageInfo, ItemInfo, ItemList],
  schemaVersion: 2,
  migration: () => {}
};
