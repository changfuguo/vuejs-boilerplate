const fs = require('fs');
const path = require('path');
const util = require('util');
function InlineManifestPlugin (options) {
    this.options = extend({
        name: 'webpackManifest',
        manifestPath: 'manifest.json',
        dependencies:['lib', 'css']
        
    }, options || {})
}
/**
*   http://www.cnblogs.com/wonyun/p/6030090.html
    * Async（异步事件）:

    * html-webpack-plugin-before-html-generation
    * html-webpack-plugin-before-html-processing
    * html-webpack-plugin-alter-asset-tags
    * html-webpack-plugin-after-html-processing
    * html-webpack-plugin-after-emit
    Sync（同步事件）:

    * html-webpack-plugin-alter-chunks
*/
InlineManifestPlugin.prototype.apply = function (compiler) {
    var me = this

    compiler.plugin('compilation', function (compilation) {
      
        compilation.plugin('html-webpack-plugin-before-html-generation', function (htmlPluginData, callback) {
                
                const manifestPath = me.options.manifestPath;
                const isDevServer = compiler.outputFileSystem.constructor.name === 'MemoryFileSystem';

                const output = isDevServer?path.basename(manifestPath): path.relative(compiler.outputPath, manifestPath);
                const pageInfo = JSON.parse((compilation.assets[output]||{}).content || '{}');
                const original = {};
                const dependencies = me.options.dependencies;
                for(var i = 0; i < dependencies.length; i++) {

                    var filePath = path.join(path.dirname(manifestPath),'manifest.' + dependencies[i] + '.json');
                    var content = require(filePath);
                    Object.keys(content).map(function(attr, index) {
                        if (/\.(js|css)$/.test(attr)) {
                            original[attr] = content[attr]
                        }
                    })
                }
               Object.keys(pageInfo).map(function(attr, index) {
                    if (/\.(js|css)$/.test(attr)) {
                        original[attr] = pageInfo[attr]
                    }
                });
                // 这里设置是否是dev，如果是dev则
                htmlPluginData.assets.isDev = isDevServer;
                htmlPluginData.assets.sourceMap = original;
                callback(null, htmlPluginData);
                
        });
    })
}


function extend (base) {
    var i = 1
    var len = arguments.length

    for (; i < len; i++) {
        var obj = arguments[i]
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                base[key] = obj[key]
            }
        }
    }

    return base
}

module.exports = InlineManifestPlugin