/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

/**
 * 返回平台所用的 fetch 工具
 * */
export default class Fetch {
    static getFetchToolkit(): any {
        let httpFetch: any;
        // @ts-ignore
        if (typeof global.fetch !== 'undefined' && typeof global.fetch === 'function') {
            // @ts-ignore
            httpFetch = global.fetch;
        } else if (typeof fetch === 'function') {
            httpFetch = fetch; // RN FETCH
        } else {
            /*IFTRUE_WXAPP*/
            httpFetch = require("wxapp-fetch");
            /*FITRUE_WXAPP*/

            /*IFTRUE_WEBAPP*/
            httpFetch = require("isomorphic-fetch");
            /*FITRUE_WEBAPP*/

            /*IFTRUE_UNIAPP*/
            let uniFetch = require("../uniapp/http/uni-fetch");
            httpFetch = uniFetch.fetch;
            /*FITRUE_UNIAPP*/
        }
        return httpFetch
    }

}
