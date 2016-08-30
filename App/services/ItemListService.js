/**
 * Created by leesy on 2016-08-26.
 */


'use strict';

import realm from '../realm';
import { imageApiUrl, isDebugData } from './ServerConfig';
import type { ItemListModel, ImageInfo, ItemInfo } from '../realm/models/ItemListModel';

import dateFormat from 'dateformat';

import TestDataService from './data/testdata';
const testdata = new TestDataService();

class ItemListControl {
    async getAllItemList(forceUpdate: bool) {
        if (isDebugData) {
            return testdata.getAll();
        }

        var data = [];
        let context = realm.current();
        try {
            let ItemList = context.objects('ItemListModel');

            // for (var i = 0; i < ItemLists.length; i++) {
            //     var ItemList = ItemLists[i].data;

                var result;
                if (forceUpdate === false ) {
                    result = this.getItemListFromContext(ItemList);
                } else {
                    result = await this.getAllItemListFromApiAsync();
                    this.updateItemListInContext(ItemList, result, context)
                }

                data.push(result);
            // }
        } finally {
            context.close();
        }

        return data;
    }

    getItemListFromContext(ItemList: any) {
        return {
            imagetype : ItemList.imagetype,
            imagecount: ItemList.imagecount ,
            iteminfo : ItemList.ItemInfo.map((item) => {
                return {
                    itemid: item.itemid,
                    itemtype: item.itemtype ,
                    itemdate: item.itemdate,
                    itemvalue:  {
                        bucket: item.itemvalue.bucket,
                        uploadfilename: item.itemvalue.uploadfilename,
                        filesize: item.itemvalue.filesize ,
                        imagefilename: item.itemvalue.imagefilename,
                        imagekey: item.itemvalue.imagekey ,
                        thumbfilename: item.itemvalue.thumbfilename,
                        thumbkey: item.itemvalue.thumbkey
                    }
                }
            }),
            item_status: ItemList.item_status
       }
    }

    updateItemListInContext(ItemList: any, result: any, context: any) {
        context.write(() => {
            ItemList  = {
                imagetype : result.imagetype.toString() ,
                imagecount: result.imagecount.toNumber() ,
                iteminfo: {
                    iteminfo: result.iteminfo
                }
            }

            while(ItemList.ItemInfo.length > 0) {
                ItemList.ItemInfo.pop();
            }

            result.ItemInfo.forEach((item) => {
                ItemList.iteminfo.push({
                    itemid: item.itemid.toNumber(),
                    itemtype: item.itemtype.toString(),
                    lastdate: item.lastdate.toDateString(),
                    itemvalue: {
                        bucket: item.itemvalue.bucket,
                        uploadfilename: item.itemvalue.uploadfilename.toString(),
                        filesize: item.itemvalue.filesize.toNumber(),
                        imagefilename: item.itemvalue.imagefilename.toString(),
                        imagekey: item.itemvalue.imagekey.toString(),
                        thumbfilename: item.itemvalue.thumbfilename.toString(),
                        thumbfilekey: item.itemvalue.thumbfilekey.toString(),
                    },
                    itemstatus: item.itemstatus.toString()
                })
            });
        });
    }

    async getAllItemListFromApiAsync() {
        var url = imageApiUrl;

        try {
            let response = await fetch(url);
            const result = await response.json();

            return result;

        } catch(error) {
            global.log(error);
        }
    }

    getDayFromUtcDate(date: number): string {
        var value = new Date(date * 1000);
        var day = dateFormat(value, 'dddd');

        return day;
    }
}

module.exports = ItemListControl;
