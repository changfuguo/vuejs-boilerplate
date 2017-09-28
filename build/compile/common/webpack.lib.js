const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const WebpackAssetsManifest =  require('webpack-assets-manifest');

const path = require('path');

const buildConf = require('../../config');
const BASE_PATH = buildConf.BASE_PATH;
const DIST_PATH = buildConf.DIST_PATH;
const MANIFEST_PATH = buildConf.MANIFEST_PATH;

var webpackLibConfig = {
    output: {
        path: BASE_PATH,
        filename: '[name].[chunkhash:8].js',
        library: '[name]'
    },
    entry: buildConf.lib_entries,
    resolve:{
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': `"production"`
            }
        }),
        new WebpackAssetsManifest({
            output : path.join(MANIFEST_PATH, 'manifest.lib.json'),
            merge: false,
            publicPath:"./",
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
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
};


function webpacklib(env = 'dev') {
    let startTime  = + new Date();
    
    let libConfig = webpackMerge(webpackLibConfig, {
        output: {
            path: DIST_PATH
        },
        plugins:[
            new webpack.DllPlugin({
                path: `${DIST_PATH}/manifest.dep.[name].json`,
                name: '[name]',
                context: BASE_PATH,
            })
        ]
    });

    console.log('> Start build library code!')

    return new Promise((resolve, reject) => {
        webpack(libConfig, (err, stats) => {
            let endTime  = + new Date();
            let wasteTime = Math.floor((endTime - startTime)/1000);
            if (err) {
                console.log(`> Library code error:${err}`);
                reject();
            } else {
                console.log(`> Library code build over! all ${wasteTime}s`);
                resolve(getAssets());
            }
        })  
    }); 
}

function getAssets(){
    var manifest = require(path.join(BASE_PATH, './build/manifest/manifest.lib.json'));
    var assets = [];

    Object.keys(manifest).map(function(attr){
        if (path.extname(attr) == '.js') {
            var item = {
                key: attr,
                url: './' + manifest[attr]
            };
            assets.push(item);
        }
    });
    return assets;
}
module.exports = webpacklib;
