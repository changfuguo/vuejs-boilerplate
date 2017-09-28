/**
 * Created by francis on 15/07/2017.
 */

var RETURN = {
    "errno": 0,
    "error": "",
    "data": {
        "list": [
            {
                "title": "入职快，有保险，定期团建",
                "pub_time": "20170705",
                "content": "content字段是干嘛用的",
                "logo": "abc.png", // 公司LOGO图片
                "company_id": "23", // 公司ID
                "company": "北京车xxxx赁有限公司1", // 公司名称
                "title": "1234广州市广骏旅游汽车企业集团有限公司以诚信、实力和产品质量获得业界的高度认可。广州市三大国有租车三大国有三大国有", // 公司简介
                "scale": "1000人", // 公司规模
                "tags": ["生日祝福", "管三餐"], // 标签
                "label": [{ auth: '认证'}, {new: '新晋'}, {hot: '人气'}] // 认证标签
            },
            {
                "title": "入职快，有保险，定期团建",
                "pub_time": "20170705",
                "content": "content字段是干嘛用的",
                "logo": "abc.png", // 公司LOGO图片
                "company_id": "23", // 公司ID
                "company": "北京车友帮汽车租赁有限公司2", // 公司名称
                "title": "abcd广州市广骏旅游汽车企业集团有限公司以诚信、实力和产品质量获得业界的高度认可。广州市三大国有租车三大国有三大国有", // 公司简介
                "scale": "50人", // 公司规模
                "tags": ["生日祝福", "管三餐"], // 标签
                "label": [{ auth: '认证'}, {new: '新晋'}, {hot: '人气'}] // 认证标签
            },

        ],
        "next": 0
    }
};

module.exports = function (req, res, next) {
    setTimeout(function () {
        res.json(RETURN);
    }, 1000);
}