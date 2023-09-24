/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

export class RequestBase {
    appId: number;
    clientType: number;
    imei: string
    constructor(appId: number, clientType: number, imei: string) {
        this.appId = appId;
        this.clientType = clientType;
        this.imei = imei;
    }
}