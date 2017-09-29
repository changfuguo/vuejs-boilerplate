const path = require('path');
const env = require('yargs').argv.env || 'dev';
const BASE_PATH = path.join(__dirname, '../..');


module.exports = Object.assign({
    publicPath:'/',
    assetsPath: './',
    modules_entries: {
        todos: './src/modules/todos/index.js'
    },
    css_entries: {
        todos_scss: './src/modules/todos/index.scss'
    },
    lib_entries: {
        todos_lib: ['vue', 'vue-router', 'vuex']
    },
    scripts: {
        local: {
            js:[], //这里是{key,url}的形式
            css:[]
        },
        test: {
            js:[],
            css:[]
        },
        pre: {
            js:[],
            css:[]
        },
        online: {
            js: [],
            css:[]
        }
    },
    BASE_PATH: BASE_PATH,
    SOURCE_PATH: path.join(BASE_PATH, 'src'),
    DIST_PATH: path.join(BASE_PATH, `dist/${env}`),
    NODE_MODULES_PATH: path.join(BASE_PATH, 'node_modules'),
    MANIFEST_PATH: path.join(BASE_PATH, 'build','manifest'),
    BUILD_PATH : path.join(BASE_PATH, 'build')
}, require(`./${env}.env`));
