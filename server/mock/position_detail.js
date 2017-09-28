var RETURN = {
    "errno": "0",
    "error": "",
    "data": {
        "available": 1, // 是否可投递， 1=是，0=否        
        "progress": "加入我们", // 投递、已投递、待面试、面试通过
        "info_status": 1, // 是否填写了简历，1=是，0=否
        "status": 8, // 当前职位投递状态
        "href_url": "", // URL跳转，控制跳转URL 
        "title": "入职快，有保险，定期团建",   // 公司概要
        "pub_time": "1月25日发布",
        "detail": "发生的发生\n东方市教会烦得很\n范德萨很费劲啊哈",
        "company": "北京宏达伟汽车租赁有限公司",
        "scale": "500人以上",
        "phone": "", //联系电话，可能为空
        "requirement":"25-35周岁，驾龄满三周年",
        "address": "公司地址",  // 公司地址
        "car_list": [], // 该字段当前冗余
        "tag_list": ["奖金", "社保", "团建", "保险"],
        "label_list": [{ auth: '认证'}, {new: '新晋'}, {hot: '人气'}],  // 校验标签
        "logo": "https://cn.vuejs.org/images/logo.png", // 公司LOGO
        "news": [  // 公司动态
            {
                "news_id": "12131231", // 文章内容ID
                "banner_pic": "http://fdfs.xmcdn.com/group5/M02/19/2D/wKgDtVN9veySA-cBAAEVQW1-pK0188.jpg", //推荐图片
                "title": "滑动事件哈萨克接电话卡说句话道具卡圣诞卡", // 动态标题
                "pub_time": "30分钟前" // 动态发布时间
            },
            {
                "news_id": "121332421231", // 文章内容ID
                "banner_pic": "http://fdfs.xmcdn.com/group5/M02/19/2D/wKgDtVN9veySA-cBAAEVQW1-pK0188.jpg", //推荐图片
                "title": "滑动事件哈萨克接电话卡说句话道具卡圣诞卡", // 动态标题
                "pub_time": "30分钟前" // 动态发布时间
            },
            {
                "news_id": "121312324231", // 文章内容ID
                "banner_pic": "http://fdfs.xmcdn.com/group5/M02/19/2D/wKgDtVN9veySA-cBAAEVQW1-pK0188.jpg", //推荐图片
                "title": "滑动事件哈萨克接电话卡说句话道具卡圣诞卡", // 动态标题
                "pub_time": "30分钟前" // 动态发布时间
            },
        ]
    }
}

module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}