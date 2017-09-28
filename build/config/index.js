const path = require('path');
const env = require('yargs').argv.env || 'dev';
const BASE_PATH = path.join(__dirname, '../..');


let OFFLINE_PASSPORT_JS = '//passport.rdtest.didichuxing.com/static/login/0.3.20/login.test.js';
let ONLINE_PASSPORT_JS = '//webapp.didistatic.com/static/webapp/shield/z/login/login/0.3.21/login.min.js';
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
            js:[{ key: 'login', url: OFFLINE_PASSPORT_JS}],
            css:[]
        },
        test: {
            js:[{ key: 'login', url: OFFLINE_PASSPORT_JS}],
            css:[]
        },
        pre: {
            js:[{ key: 'login', url: OFFLINE_PASSPORT_JS}],
            css:[]
        },
        online: {
            js: [{ key: 'login', url: ONLINE_PASSPORT_JS}],
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
