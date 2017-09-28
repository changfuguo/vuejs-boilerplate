const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackAssetsManifest =  require('webpack-assets-manifest')

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path');

const buildConf = require('../../config');
const BASE_PATH = buildConf.BASE_PATH;
const DIST_PATH = buildConf.DIST_PATH;
const MANIFEST_PATH = buildConf.MANIFEST_PATH;
const entries = buildConf.css_entries;

var webpackLibConfig = {
    output: {
        path: DIST_PATH,
        filename: '[name].[chunkhash:8].js',
        library: '[name].[chunkhash:8]',
    },
    entry: entries,
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].[contenthash:8].css',
            allChunks: true,
            disable: false
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
           
        }),
        new WebpackAssetsManifest({
            output : path.join(MANIFEST_PATH, 'manifest.css.json'),
            merge:false,
            publicPath: "./",
            fileExtRegex: /\.(js|css)$/
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
    ],
    module: {
        rules: [
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
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader!postcss-loader!sass-loader',
                    fallback: 'style-loader'
                })
            }
        ]
    }
};

/**
* @desc 导出可编程的构建，只和env有关系，导出函数,导出的目录路径为
* basePath + dist_{env}
* 导出的文件名为{manifest-[name].json}
* @param{String} env  local | test| pre| online 
**/
function webpackcss(env = 'local', action = 'build') {
    let startTime  = + new Date();
    let libConfig = webpackMerge(webpackLibConfig, {
        output: {
            path: DIST_PATH
        }
    });

    return new Promise((resolve, reject) => {
        // 如果是local，则不单独编译
        if (env == 'dev' && action == 'runtime') {
            return resolve([]);
        }
        console.log('> Start build CSS code!')
        webpack(libConfig, (err, stats) => {

            var manifest = require(path.join(MANIFEST_PATH, 'manifest.css.json'));
            var assets = [];

            Object.keys(manifest).map(function(attr){
                if (path.extname(attr) == '.css') {
                    var item = {
                        key: attr,
                        url: './' + manifest[attr]
                    };
                    assets.push(item);
                }
            });
            let endTime  = + new Date();
            let wasteTime = Math.floor((endTime - startTime)/1000);
            if (err) {
                console.log(`> CSS code error: ${err}`);
                reject();
            } else {
                console.log(`> CSS code build over! all ${wasteTime}s`);
                resolve(assets);
            }
        })  
    })
}

module.exports = webpackcss;
