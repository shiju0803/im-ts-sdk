/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

import { imClient } from "./lim/core/ImClient";

// if(typeof window !== 'undefined'){
//     console.log("window");

// }
// if(typeof global !== 'undefined'){
//     console.log("global");

// }
// @ts-ignore
if (typeof uni !== 'undefined') {
    // console.log("uni");
    // @ts-ignore
    uni['im'] = imClient;
    // @ts-ignore
    // uni['im_webtoolkit'] = WebToolkit;
}

export {
    imClient as im
    // Logger as log,
    // WebToolkit as webtoolkit,
};

