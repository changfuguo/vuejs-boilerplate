var RETURN = {
	errno:0,
	data:{
	  "error_type": 0, //0 正常 1 定位失败 2未开通城市
    "city_name": '北京',
    "city_type": '',
    "banner":[
    {
        'picurl':'http://ptyy-guyuimg.didistatic.com/static/guyuimg/app/banner/banner_01.png',
        'jumpurl':'http://www.baidu.com',
        'title':'test'
    }],
    'service':[{
        'picurl':'http://www.baidu.com',
        'jumpurl':'http://www.baidu.com',
        'title':'车商城',
        'need_login':1,// 1需要 0不需要
    }],
    "hot_recommend":{//热门推荐 3.2.2新增 低版本不显示
      "title":"",
      "list":[{
          'picurl':'http://www.baidu.com',
          'jumpurl':'http://www.baidu.com',
          'title':'起亚K2',
          'price':'2000',
      }]
    },
 
 
    'hot_sales':{//销售热榜 3.2.2新增 低版本不显示
        'title':'',
        'jumpurl':'',
        'jumptitle':'',
 
        "list":[{
            'picurl':'http://www.baidu.com',
            'jumpurl':'http://www.baidu.com',
            'title':'起亚K2',
            'price':'2000',
      }]
    },
 
 
    "hot_position": { 
      'title':'',
      "jumpurl":'',
      "jumptitle":'',        
      "list":[{
          "logo": "", // 公司LOGO图片
          "company_id": "", // 公司ID
          "company": "", // 公司名称
          "title": "", // 公司简介
          "scale": "", // 公司规模
          "tags": ["生日祝福", "管三餐"], // 标签
          "label": [{ auth: '认证'}, {new: '新晋'}, {hot: '人气'}] // 认证标签
      }],
    }
  }
}


module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}