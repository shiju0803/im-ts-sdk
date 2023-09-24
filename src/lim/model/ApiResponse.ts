/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

export default class ApiResponse {
    code: number | undefined;
    msg: string = '';
    data: any = null;

    constructor(succeed = false) {
        if(succeed){
            this.code = 200;
        }
    }

    isSucceed(): boolean {
        return this.code === 200;
    }

    isFailed(): boolean{
        return !this.isSucceed();
    }
}
