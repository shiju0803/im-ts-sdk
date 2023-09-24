/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

const merge = require('webpack-merge')
const libConfig = require('./webpack.lib.config')

// const config = process.env.NODE_ENV === 'development' ? devConfig : proConfig

module.exports = (env, argv) => {
    console.log('mode:' + argv.mode);
    console.log('platform:' + process.env.platform);
    console.log('-->is wx:' + (process.env.platform == 'wx'));
    // let config = argv.mode === 'development' ? devConfig : proConfig;
    let config = libConfig;
    process.env.platform = argv.platform;
    console.log('env platform:' + process.env.platform);
    return merge(config);
};
