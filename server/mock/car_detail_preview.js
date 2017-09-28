var RETURN  = {
  "errno": "0",
  "error": "",
  "data": {
    "car_id": "1234567", // 加密
    "car_pic": ["http://iph.href.lu/375x210?text=图片","http://iph.href.lu/375x210?text=图片","http://iph.href.lu/375x210?text=图片","http://iph.href.lu/375x210?text=图片"], // 车型对应的图片 由一张图片修改为支持多张图片
    "car_brand": "奔驰 C200L", // 车型名称
    "rent": 3600, // 租金
    "deposit": 2000, // 押金
    "company_name": "北京正道租赁有限公司", // 公司名称
    "car_basic":{
      "brand":"大众捷达",//品牌
      "year":"2015款",//年款
      "power":"混合动力",//动力
      "auto_man":"自动",//自动/手动
      "car_type":"优享",//车辆类型
      "use_time":"3年6个月",//已使用年限
      "get_car_term":"公司现车",//提车周期
      "lease_term":"6个月",//租期
      "stock":10,//库存
    },
     //服务保障
    "service":[
      {
         "title": "保险",
         "content": "保险"
      },
      {
         "title": "维修",
         "content": "维修"
      },
      {
         "title": "保养",
         "content": "保养"
      },
    ],
  
     //增值服务
    "add_service":[
      {
          "id": 1,
          "title": "加油福利",
          "content": "200元一次性获得车充、支架等四件套",
      },
      {
          "id": 2,
          "title": "加油福利",
          "content": "200元一次性获得车充、支架等四件套",
      },
      {
          "id": 3,
          "title": "加油福利",
          "content": "200元一次性获得车充、支架等四件套",
      },
      {
          "id": 4,
          "title": "加油福利",
          "content": "200元一次性获得车充、支架等四件套",
      },
      {
          "id": 5,
          "title": "加油福利",
          "content": "200元一次性获得车充、支架等四件套",
      },
    ],
    "extra_info":[
        {
            "title": "公司服务简介",
            "content": "带回家阿萨德哈酒的哈健康"
        },
        {
            "title": "最低起租时长",
            "content": "3"
        },
        {
            "title": "保险类型",
            "content": "符合当地网约车新政要求"
        },
        {
            "title": "上线城市",
            "content": "成都"
        }
    ],
    "state_table":"http://iph.href.lu/375x210?text=违约清算表",//违约清算表
    "status": 0 // 当前登录用户状态
  }
};

module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}