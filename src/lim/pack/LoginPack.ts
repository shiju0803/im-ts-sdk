/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

export class LoginPack {
    appId: number;
    userId?: string;
    clientType?: number;
    constructor(appId: number, userId: string, clientType?: number) {
        this.userId = userId;
        this.clientType = clientType;
        this.appId = appId;
    }
}