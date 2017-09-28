/**
*	@description 统一的路由配置
*	
*
*/
var path = require('path');
var fs = require('fs');
var MOCK_DIR = path.join(__dirname, './mock')
var ROUTE_CONFIG = require('./config/route');
module.exports = function(router) {

	Object.keys(ROUTE_CONFIG).forEach(function (value, index) {

		var routerItem = ROUTE_CONFIG[value];
		var method = routerItem.method || 'get';
		var filename = routerItem.filename;

		if (fs.existsSync(path.join(MOCK_DIR, filename))) {

			var mocker = require('./mock/' + filename);
			router[method](value, function(req, res, next){
				mocker(req, res, next)
			})
		} else {
			console.log('filename is not exists [' + path.join(MOCK_DIR, filename) + ']');
		}
	})
}