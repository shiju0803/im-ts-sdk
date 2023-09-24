/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

import Beans from '../common/utils';

export class MessagePack {
    appId: number;
    messageId: string;
    fromId?: string;
    toId?: string;
    messageRandom?: number;
    messageTime?: number;
    messageBody?: string;

    constructor(appId: number) {
        this.messageId = Beans.uuid();
        this.appId = appId;
        this.messageRandom = this.RangeInteger(0, 10000);
        this.messageTime = Date.parse(new Date().toString());
    }

    RangeInteger(min: number, max: number) {
        const range: number = max - min
        return Math.floor(Math.random() * range) + min
    }

    buildTextMessagePack(fromId: string, toId: string, text: string) {
        this.fromId = fromId;
        this.toId = toId;
        let body = { type: 1, content: text }
        this.messageBody = Beans.json(body);
    }

    buildImageMessagePack(fromId: string, toId: string, obj: any) {
        this.fromId = fromId;
        this.toId = toId;
        let body= { type: 2, content: { datu: obj.datu, slt : obj.slt} }
        this.messageBody = Beans.json(body);
    }

    buildCustomerMessagePack(fromId: string, toId: string, type: number, obj: any) {
        this.fromId = fromId;
        this.toId = toId;
        let body = { type: type, content: obj }
        this.messageBody = Beans.json(body);
    }
}