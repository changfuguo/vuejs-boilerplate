// import sys 
const path = require('path');
//import module
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const buildConf = require('../config/build');
const BASE_PATH = buildConf.BASE_PATH;
const DIST_PATH = buildConf.DIST_PATH;
const PUBLIC_PATH = buildConf.PUBLIC_PATH;
// 这里做的比较恶心，非local环境需要手动删除入口的css配置
for(var entry in buildConf.css_entries) {
    delete webpackBaseConfig.entry[entry];
}
const webpackConfig = webpackMerge(webpackBaseConfig, {

    output: {
        filename: "[name].[chunkhash:8].js",
        chunkFilename: 'chunk.[name].[chunkhash:8].js',
        path: DIST_PATH,
        publicPath: PUBLIC_PATH
    },
    
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': `"production"`,
              'BUILD_ENV': '"test"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        new webpack.optimize.UglifyJsPlugin({
             compress: {
                unused: true,    // Enables tree shaking
                dead_code: true, // Enables tree shaking
                pure_getters: true,
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                comparisons: true,
                sequences: true,
                evaluate: true,
                join_vars: true,
                if_return: true,
            },
            output: {
                comments: false
            },
        })
    ]
});

//导出合并后的配置文件
module.exports = webpackConfig;