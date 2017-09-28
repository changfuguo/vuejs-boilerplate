// import sys 
const path = require('path');
//import module
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const buildConf = require('../../config');
const BASE_PATH = buildConf.BASE_PATH;
const SOURCE_PATH = buildConf.SOURCE_PATH;
const NODE_MODULES_PATH = buildConf.NODE_MODULES_PATH;
const DIST_PATH = buildConf.DIST_PATH;
const PUBLIC_PATH  = buildConf.publicPath;

const css_entries = buildConf.css_entries;
// 基本设置
const webpackBaseConfig = require('./webpack.base');

// 重置入口文件
function getEntries(){
    let entries = Object.assign({}, webpackBaseConfig.entry, css_entries);
    Object.keys(entries).map(key => {
        entries[key] = [
            entries[key],
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
        ]
    });
    return entries;
}


const webpackConfig = webpackMerge(webpackBaseConfig, {
	entry: getEntries(webpackBaseConfig.entry),
    output: {
        path: DIST_PATH,
        publicPath: PUBLIC_PATH
    },
    plugins: [
    	new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': `"development"`,//`"production"`,
              'BUILD_ENV': '"dev"'
            }
        }),

        new BundleAnalyzerPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        //Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'source-map'
});

//导出合并后的配置文件
module.exports = webpackConfig;