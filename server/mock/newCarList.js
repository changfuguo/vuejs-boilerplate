var RETURN  = {
    "errno": "0",
    "error": "",
    "data": [
        {
            "car_id": 1,
            "brand": "东风风神A60",
            "series": "1.6L豪华4AT",
            "delivery": "1.6L",
            "img": "http://static.galileo.xiaojukeji.com/static/tms/api/public/undefined/b681dc2cf8b05e5cce3844146277b52c.png",
            "firstpayment": "15325.00",
            "monthpayment": "2100.00",
            "endpayment": "13800.00",
            "total": "10.48",
            times: 36
        },
        {
            "car_id": 2,
            "brand": "长安",
            "series": "睿骋1.8T自动智享尊悦型",
            "delivery": "1.8T",
            "img": "http:\/\/static.galileo.xiaojukeji.com\/static\/tms\/api\/public\/undefined\/e028ab3fef955e23544164b2dab1e634.png",
            "firstpayment": "20050.00",
            "monthpayment": "3000.00",
            "endpayment": "20038.00",
            "total": "15.11",
            times: 36
        },
        {
            "car_id": 3,
            "brand": "比亚迪",
            "series": "G6",
            "delivery": "2.0L",
            "img": "http:\/\/static.galileo.xiaojukeji.com\/static\/tms\/api\/public\/undefined\/e028ab3fef955e23544164b2dab1e634.png",
            "firstpayment": "16728.00",
            "monthpayment": "2200.00",
            "endpayment": "14400.00",
            "total": "11.04",
            times: 36
        }
    ]
};

module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}