/**
 * Created by leesy on 2016-08-26.
 */
'use strict';

export type ImageInfo = {
        bucket: string;
        uploadfilename: string;
        filesize: number;
        imagefilename: string;
        imagekey: string;
        thumbfilename: string;
        thumbfilekey: string;
};

export type ItemInfo = {
        itemid: number;
        itemtype: string;
        lastdate: Date;
        itemvalue: ImageInfo;
        itemstatus: string;
};

export type ItemListModel = {
        imagetype :string;
        imagecount: number;
        iteminfo: Array<ItemInfo>;
};
