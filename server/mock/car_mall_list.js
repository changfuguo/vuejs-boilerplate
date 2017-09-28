var RETURN = {
    "errno": "0",
    "error": "",
    "data": {
        "toast": "", // 租车商城toast展示，若为空，则不展示
        "list":[
            {
                "car_id": "123089", // 车型ID，用于访问车型详情
                "car_pic": "http://iph.href.lu/193x144", // 车型对应的图片
                "car_brand": "奔驰 C200L",
                "company_name": "北京金御马有限公司",
                "rent": "3600" // 租金
            },
            {
                "car_id": "123089", // 车型ID，用于访问车型详情
                "car_pic": "http://iph.href.lu/193x144", // 车型对应的图片
                "car_brand": "奔驰 C200L",
                "company_name": "北京金御马有限公司",
                "rent": "3600" // 租金
            }
        ],
        "next": 1  // 0=无下一页, 1=有下一页
    }
}

module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}