/**
*	@decription mock file config
*	
*	该文件实现路由的配置，在没有test准备好的情况下可以直接走这个mock数据
*	key：			为要匹配的路由
*	value：			为对应的参数配置
*		method：		get或者post，router的方法
*		filename: 	对应的mock文件
*/

module.exports = {
	'/api/realtime': {
		method: "post",
		filename: "realtime.js"
	}
};
