/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

export default class Logger {
    static debug = true;

    static info(message?: any, ...optionalParams: any[]): void {
        if (Logger.debug) {
            console.info(`${ new Date().toISOString() } : ${ message }`, ...optionalParams);
        }
    }

    static infoTag(tag: string, message?: any, ...optionalParams: any[]): void {
        if (Logger.debug) {
            console.info(`${ new Date().toISOString() } ${ tag } : ${ message }`, ...optionalParams);
        }
    }

    static error(message?: any, ...optionalParams: any[]): void {
        if (Logger.debug) {
            console.error(`${ new Date().toISOString() } : ${ message }`, ...optionalParams);
        }
    }

    static errorTag(tag: string, message?: any, ...optionalParams: any[]): void {
        if (Logger.debug) {
            console.error(`${ new Date().toISOString() } ${ tag }  : ${ message }`, ...optionalParams);
        }
    }

    static trace(e: any): void {
        if (Logger.debug) {
            if (e instanceof Error) {
                console.error(`${ e.message } \n ${ e.stack ?? '' }`);
            } else {
                console.error(e);
            }
        }
    }
}
