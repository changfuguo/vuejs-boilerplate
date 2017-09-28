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
	},
	'/v2/invite/car/cityall': {
		method: "get",
		filename: "cityall.js"
	},
	'/v2/invite/sendsms': {
		method: "get",
		filename: "sendsms.js"
	},
	'/v2/invite/login':{
		method: "get",
		filename: "login.js"
	},
	'/v2/invite/car/brandlist': {
		method: "get",
		filename: "carall.js"
	},
	'/v2/invite/driver/getintention': {
		method: "get",
		filename: "intention.js"
	},
	'/v2/invite/car/getcarlist': {
		method: "get",
		filename: "newCarList.js"
	},
	'/v2/invite/car/colorlist': {
		method: "get",
		filename: "colors.js"
	},
	"/v2/invite/car/addhirecar":{
		method: "post",
		filename: "addhirecar.js"
	},
	"/v2/invite/driver/addinfo":{
		method: "post",
		filename: "submit_base_info.js"
	},
	"/v2/invite/car/addchangeinfo": {
		method: "post",
		filename: "submit_car_change_info.js"
	},
	// "/v2/invite/car/addhirecar": {
	// 	method: "post",
	// 	filename: "submit_car_rent_info.js"
	// },
	"/v2/invite/car/addbuyinfo": {
		method: "post",
		filename: "submit_car_buy_new_info.js"
	},
	"/v2/invite/carmall/financedetail": {
		method: "get",
		filename: "finacedetail.js"
	},
	"/v2/invite/driver/intentioncity": {
		method: "get",
		filename: "intention_city.js"
	},
	"/v2/invite/car/modellist": {
		method: "get",
		filename: "car_model_list.js"
	},
    "/v2/invite/mall/dcompany/list": {
        method: "get",
        filename: "position_list.js"
    },
    "/v2/invite/mall/dcompany/search": {
        method: "get",
        filename: "position_search.js"
    },
    "/v2/invite/mall/dcompany/detail": {
        method: "post",
        filename: "position_detail.js"
    },
		 "/v2/invite/position/preview": {
        method: "get",
        filename: "position_detail.js"
    },
		
	"/v2/invite/driver/driverinfo": {
		method: "post",
		filename: "user_info.js"
	},
	"/invite/carmall": {
		method: "post",
		filename: "car_mall_list.js"
	},
	"/v2/invite/carmall/detail": {
		method: "get",
		filename: "car_detail.js"
	},
	"/v2/invite/carmall/orderdetail": {
		method: "get",
		filename: "car_detail.js"
	},
	"/v2/invite/carmall/preview":{
		method: "post",
		filename: "finacedetail.js"
	},
	"/invite/carmall/preview": {
		method: "post",
		filename: "car_detail_preview.js"
	},
	"/invite/driver/carorder": {
		method: "post",
		filename: "car_order_list.js"
	},
	"/invite/carmall/detail": {
		method: "get",
		filename: "car_detail.js"
	},
	"/v2/invite/driver/rentcar": {
		method: "post",
		filename: "rent_car.js"
	},
	"/invite/driver/revgoe": {
		method: "get",
		filename: "revgoe.js"
	},
	"/invite/config": {
		method: "post",
		filename: "config.js"
	},
	"/invite/driver/unsigned": {
		method: "get",
		filename: "unsigned.js"
	},
	"/invite/driver/pintention": {
		method: "post",
		filename: "pintention.js"
	},
	"/invite/driver/contract": {
		method: "post",
		filename: "contract.js"
	},
	"/invite/driver/activate": {
		method: "get",
		filename: "activity.js"
	},
	"/v2/invite/driver/finace/rentcar": {
		method: "post",
		filename: "submit_rentcar.js"
	},
	"/app/group/previewinvite": {
		method: "post",
		filename: "previewinvite.js"
	},
	"/app/group/acceptinvite": {
		method: "post",
		filename: "previewinvite.js"
	},
	"/v2/invite/mall/dcompany/news/detail": {
		method: "post",
		filename: "newsDetail.js"
	},
	"/app/home":{
		method:"post",
		filename: "home.js"
	}
};
