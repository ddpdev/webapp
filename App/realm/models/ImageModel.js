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
        item_id: string;
        item_type: string;
        last_date: Date;
        item_value: ImageInfo;
        item_status: string;
};

export type ItemListModel = {
        imageType :string;
        imageCount: number;
        data: Array<itemInfo>;
};
