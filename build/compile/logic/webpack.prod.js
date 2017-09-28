// import sys 
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path');
//import module
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const buildConf = require('../../config');
const BASE_PATH = buildConf.BASE_PATH;
const SOURCE_PATH = buildConf.SOURCE_PATH;
const DIST_PATH  = buildConf.DIST_PATH;
const NODE_MODULES_PATH = buildConf.NODE_MODULES_PATH;
const PUBLIC_PATH = buildConf.PUBLIC_PATH;
// 基本设置
const webpackBaseConfig = require('./webpack.base');

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
              'BUILD_ENV': '"online"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
           
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
        }),
        new CompressionWebpackPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp(
                '\\.(' +
                    ['js', 'css'].join('|') +
                ')$'
                ),
                threshold: 10240,
                minRatio: 0.8
        })
    ]
});

//导出合并后的配置文件
module.exports = webpackConfig;