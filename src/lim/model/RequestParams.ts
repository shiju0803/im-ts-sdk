/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

export class RequestParams {
    appId: number;
    identifier?: string;
    userSign: string

    constructor(appId: number, identifier: string, userSign: string){
        this.appId = appId
        this.identifier = identifier
        this.userSign = userSign
    }

}