const commonChucks = [''];
const objectAssign = require('object-assign');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');

const argv = require('yargs').argv;
const env = argv.env;
const action = argv.action;
//html页面
var htmlTemplate = './src/views/template.ejs';
var chunks = ['todos', 'todos_scss'];
var __inject = (env == 'dev' && action =='runtime')?true: false;
console.log(env, action)
var htmlConfig = [
    {
        filename: 'index.html',
        chunks: chunks,
        chunksSortMode: function (a, b) {
            var aIndex =chunks.indexOf(a.names[0]);
            var bIndex =chunks.indexOf(b.names[0]);
            aIndex = aIndex < 0 ? chunks.length + 1 : aIndex;
            bIndex = bIndex < 0 ? chunks.length + 1 : bIndex;
            return aIndex - bIndex;
        },
        template: htmlTemplate,
        inject: __inject
    }
];
htmlConfig.map((item) => {
    item.assets = {
        js: item.assets && item.assets.js ? item.assets.js : [],
        css: item.assets && item.assets.css ? item.assets.css : []
    }
})

const toString =  Object.prototype.toString;

const utils = {};
let typeArray = ['Function', 'RegExp', 'String'];
typeArray.map((type) => {
    utils['is' + type] = function(obj) {
        return toString.call(obj) == '[object ' + type +']';
    }
})

const BuildEntries = {
    getEntryConfig : function() {
        return objectAssign({}, htmlConfig)
    },
    addScript: function(source) {
        
        htmlConfig.map((item) => {
            var jss = item.assets.js;
            var find = -1;

            jss.map((js) => {
               if (js.key == source.key) {
                    find = 1;
                    _.extend(js, source);
                } 
            })
            if (find == -1) {
                jss.push(source);
            }
        })

        
        return BuildEntries;
    },
    addStyle: function(source) {
        htmlConfig.map((item) => {
            var csss = item.assets.css;
            var find = -1;

            csss.map((css) => {
               if (css.key == source.key) {
                    find = 1;
                    _.extend(css, source);
                } 
            })
            if (find == -1) {
                csss.push(source);
            }
        });

        return BuildEntries;
    },

    buildHtmlWebpackPlugin: function() {
        var pages = [];
        htmlConfig.map((v) => {
            pages.push(
                new HtmlWebpackPlugin(v)
            );
        })
        return pages;
    }
}
module.exports = BuildEntries;