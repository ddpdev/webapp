/**
 * Created by leesy on 2016-08-26.
 */


'use strict';

import realm from '../realm';
import { imageApiUrl, isDebugData } from './ServerConfig';
import type { ItemListModel, ImageInfo, ItemInfo } from '../realm/models/ImageModel';

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
            let ItemLists = context.objects('ItemListModel');

            for (var i = 0; i < ItemLists.length; i++) {
                var ItemList = ItemLists[i].data;

                var result;
                if (forceUpdate === false ) {
                    result = this.getItemListFromContext(ItemList);
                } else {
                    result = await this.getAllItemListFromApiAsync();
                    this.updateItemListInContext(ItemList, result, context)
                }

                data.push(result);
            }
        } finally {
            context.close();
        }

        return data;
    }

    getItemListFromContext(ItemList: any) {
        return {
            item_id: ItemList.item_id,
            item_type: ItemList.item_type,
            item_date: ItemList.item_date,
            item_value: ItemList.item_value.map((item) => {
                  return {
                      bucket: item.bucket,
                      uploadfilename: item.uploadfilename,
                      filesize: item.filesize,
                      imagefilename: item.imagefilename,
                      imagekey: item.imagekey,
                      thumbfilename: item.thumbfilename,
                      thumbkey: item.thumbkey,
                  }
              }),
            item_status: ItemList.item_status,
        }
    }

    updateItemListInContext(ListItem: any, result: any, context: any) {
        context.write(() => {
            location.weather = {
                freshness: weather.freshness,
                observation: {
                    forecast: weather.observation.forecast,
                    feelsLike: weather.observation.feelsLike.toString(),
                    current: weather.observation.current.toString(),
                    low: weather.observation.low.toString(),
                    high: weather.observation.high.toString(),
                    icon: weather.observation.icon
                }
            }

            while(location.weather.forecast.length > 0) {
                location.weather.forecast.pop();
            }

            weather.forecast.forEach((item) => {
                location.weather.forecast.push({
                    day: item.day,
                    forecast: item.forecast,
                    low: item.low.toString(),
                    high: item.high.toString(),
                    icon: item.icon
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
