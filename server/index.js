
const express = require('express');
const webpack = require('webpack');

const webpackMerge = require('webpack-merge');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const path = require('path');
const winston = require('winston');
const bodyParser = require('body-parser');
const request = require('request');
const argv = require('yargs').argv;
const env = argv.env;
const action = argv.action;

const buildConf = require('../build/config');
const DIST_PATH = buildConf.DIST_PATH;

const {compile} = require('../webpack.config');
const serverConf = require('./config/server');
const proxyServer = argv.proxyServer || serverConf.proxy.server;
const port = serverConf.port;


winston.handleExceptions(new winston.transports.File({ filename: 'uncaught-exception.log' }))
const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({
      name: 'info-file',
      filename: 'filelog-info.log',
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: 'filelog-error.log',
      level: 'error'
    })
  ]
});
process.on('uncaughtException', function(e) {
  console.log(e)
})
var routes = require('./routes');
app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.set('views', './views')
app.set('view engine', 'ejs')
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(`${DIST_PATH}`));
// 开启代码检测，如果🈶️更新则删除内存的代码
var debugpath = require('path');
// var chokidar = require('chokidar');
// var watcher = chokidar.watch(path.resolve(__dirname));

// watcher.on('ready', () => {
//   watcher.on('all', (event, path) =>{
//     var fullPath = debugpath.resolve(__dirname, path);
//     console.log(`file:${fullPath} is updated`)
//     if(require.cache[fullPath] && !fullPath.endsWith('server.js/index.js')) {
//       delete require.cache[fullPath];
//       require(fullPath);
//     }
//   });
// });

function getIPAdress(){  
    var interfaces = require('os').networkInterfaces();  
    for(var devName in interfaces){  
          var iface = interfaces[devName];  
          for(var i=0;i<iface.length;i++){  
               var alias = iface[i];  
               if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
                     return alias.address;  
               }  
          }  
    }  
}


const testServer = 'http://127.0.0.1:8888/';
app.use('/v2/*', function(req, res) {
    var url = proxyServer + req.originalUrl;
    console.log('> ' + url);
    req.pipe(request(url)).pipe(res);
});

compile(env)
  .then((compiler) =>{
    if (action != 'build') {
            console.log('> connect to dev and hot server')
            app.use(WebpackDevMiddleware(compiler, {
                stats: { colors: true },
                noInfo: true,
                publicPath: '/'
            }))
            app.use(WebpackHotMiddleware(compiler, {
                path: '/__webpack_hmr',
                timeout: 20000,
                reload: true,
                log: console.log,
                heartbeat: 10 * 1000
            }))
        }
  });

var router = express.Router()
router.get('/', function (req, res, next) {
  res.send('> hello welcome to dev server');
})

app.use(router)
routes(router);
app.listen(port, function () {
  console.log('> '+ getIPAdress() +':' + port);
})

