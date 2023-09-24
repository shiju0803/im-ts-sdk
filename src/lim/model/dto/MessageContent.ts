/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

import {Long} from 'long';
export class MessageContent {
    messageKey: Long;
    appId?: number;
    messageId?: string;
    fromId?: string;
    toId?: string;
    messageRandom?: number;
    messageTime?: number;
    messageBody?: string;

    constructor(messageKey: Long) {
        this.messageKey = messageKey;
    }
}