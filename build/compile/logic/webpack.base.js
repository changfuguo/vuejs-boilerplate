//webpack modules
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const WebpackAssetsManifest =  require('webpack-assets-manifest');

const InlineManifestPlugin = require('../../plugins/inline-manifest-plugin');

//system modules
const path = require('path');
const fs = require('fs');
/* 设置基础路径并导出*/
const buildConf = require('../../config');
const BASE_PATH = buildConf.BASE_PATH;
const SOURCE_PATH = buildConf.SOURCE_PATH;
const NODE_MODULES_PATH = buildConf.NODE_MODULES_PATH;
const modules_entries = buildConf.modules_entries;

const webpackBaseConfig = {
    context: BASE_PATH,
    entry: modules_entries,
    output: {
        filename: "[name].[hash].js",
        chunkFilename: 'chunk.[name].[hash].js'
    },
    plugins: [
       
        new TransferWebpackPlugin([
            {from: 'static/images', to: 'static/images'},
            {from: 'static/images', to: 'static/images'},
            {from: 'static/js', to: 'static/js'},
            {from: 'static/css', to: 'static/css'}
        ], SOURCE_PATH),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackAssetsManifest({
            output : path.join(BASE_PATH, 'build/manifest/manifest.main.json'),
            merge:false,
            publicPath: "./"
        }),
        new InlineManifestPlugin({
            manifestPath: path.join(BASE_PATH, 'build', 'manifest', 'manifest.main.json')
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
     ],
    resolve: {
        modules: [
            SOURCE_PATH,
            NODE_MODULES_PATH
        ],
        extensions: [".js", ".json", ".vue", ".css"],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader' 
            },
            {
                test: /\.js$/,
                include:[SOURCE_PATH],
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 4000,
                    name: "[name][hash:8].[ext]"
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 4000,
                        name: "[name][hash:8].[ext]"
                    }
                }]
            },
            {
                test: /\.(scss)$/,
                loader:"style-loader!css-loader!postcss-loader!sass-loader"
            },
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                options: {
                    formatter: require('eslint-friendly-formatter')//错误输出格式
                }
            }
        ]
    }
};
module.exports = webpackBaseConfig;
