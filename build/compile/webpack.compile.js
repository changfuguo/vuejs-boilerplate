const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const argv = require('yargs').argv;
const fs = require('fs');
const path = require('path');
const url = require('url');
// 获取运行参数
const env = argv.env;

const ENVS = ['dev', 'qa' ,'pre' ,'prod'];

if (ENVS.indexOf(env) < 0) {
    console.log(`env '${env}' is not valid of ['dev', 'qa' ,'pre' ,'prod']`);
    return;
}

const buildConf = require('../config');
const preBuildScripts = buildConf.scripts;
const BASE_PATH = buildConf.BASE_PATH;
const BUILD_PATH  = buildConf.BUILD_PATH;
const DIST_PATH = buildConf.DIST_PATH;
const lib_entries = buildConf.lib_entries;

const buildPage = require(`${BUILD_PATH}/tools/buildPage`);
const compilePath = path.join(BUILD_PATH, 'compile');
const libPath = path.join(compilePath, 'common');
const webpackPath = path.join(compilePath, 'logic');

/**
 * 构建lib类型的文件，一次只构建一次
 * @param{String} name
 * @return{Object} Promise
 */

function compileLibrary(name = 'lib', env = 'dev') {
    let compile = require(`${libPath}/webpack.${name}.js`);
    return compile(env);
}

function getManifestPlugins() {
    const plugins = [];
    Object.keys(lib_entries).map((name) => {
        plugins.push(
            new webpack.DllReferencePlugin({
                context: BASE_PATH,
                manifest: require(`${DIST_PATH}/manifest.dep.${name}.json`),
            })
        )
    });
    return plugins;
}

/**
 * 构建业务类型文件类型的文件，一次只构建一次
 * @param{String} env 当前build的环境
 * @return{Object} Promise
 */

function getWebpackConfig(env) {
    let webpackConfig = {};
    let libFilePath = `${webpackPath}/webpack.${env}.js`;
    if (!env) {
        throw new Error('请指定运行或者构建的环境');
    } else if (fs.existsSync(libFilePath)) {
        webpackConfig = require(libFilePath);
    } else {
        throw new Error(`不存在指定的构建配置文件dev:${env}`);
    }

    //预先配置好的脚本
    let scriptConf = preBuildScripts[env];
    if (scriptConf) {
        if (scriptConf.js && scriptConf.js.length) {
            scriptConf.js.map((value) => {
                buildPage.addScript(value);
            })
        }
        if (scriptConf.css && scriptConf.css.length) {
            scriptConf.css.map((value) => {
                buildPage.addScript(value);
            })
        }
    }
    return Promise.all([ compileLibrary('css', env), compileLibrary('lib', env)])
        .then((results) => {
            // 1、把构建好的lib的js塞入本次构建的资源数组中
            let cssStats = results[0];
            let libStats = results[1];

            libStats.map(function(script) {
                (script != '') && buildPage.addScript(script);
            });
            cssStats.map(function(script) {
                (script != '') && buildPage.addStyle(script);
            });
            // 2、修改config文件
            //console.log(webpackConfig)
            webpackConfig = webpackMerge(webpackConfig, {
                plugins: [
                    ...getManifestPlugins(),
                    ...buildPage.buildHtmlWebpackPlugin()
                ]
            });

            return webpackConfig;
        }, (err) => {
            console.log(err);
        })
};
module.exports = getWebpackConfig;
