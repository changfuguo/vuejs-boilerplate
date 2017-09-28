var RETURN = {
    "errno": "0",
    "error": "",
    "data": {
        "toast": "为您查询到145家滴滴优质的合作伙伴",
        "list": [
            {
                "title": "入职快，有保险，定期团建",
                "pub_time": "20170705",
                "content": "content字段是干嘛用的",
                "logo": "abc.png", // 公司LOGO图片
                "company_id": "23", // 公司ID
                "company": "北京车友帮汽车租赁有限公司", // 公司名称
                "title": "广州市广骏旅游汽车企业集团有限公司以诚信、实力和产品质量获得业界的高度认可。广州市三大国有租车三大国有三大国有", // 公司简介
                "scale": "1000人", // 公司规模
                "tags": ["生日祝福", "管三餐"], // 标签
                "label": [{ auth: '认证'}, {new: '新晋'}, {hot: '人气'}] // 认证标签
            },
            {
                "title": "妹子多 加班费",
                "pub_time": "20170706",
                "content": "content字段是干嘛用的xxxx",
                "logo": "abc.png", // 公司LOGO图片
                "company_id": "24", // 公司ID
                "company": "北京车友帮汽车租赁有限公司2", // 公司名称
                "title": "abcabcabc广州市广骏旅游汽车企业集团有限公司以诚信、实力和产品质量获得业界的高度认可。广州市三大国有租车三大国有三大国有", // 公司简介
                "scale": "1000人", // 公司规模
                "tags": ["生日祝福", "管三餐"], // 标签
                "label": [{ auth: '认证'},  {hot: '人气'}] // 认证标签

            },
            {
                "title": "妹子多 加班费",
                "pub_time": "20170707",
                "content": "content字段是干嘛用的xxxx",
                "logo": "abc.png", // 公司LOGO图片
                "company_id": "25", // 公司ID
                "company": "北京汽车租赁", // 公司名称
                "title": "112233广州市广骏旅游汽车企业集团有限公司以诚信、实力和产品质量获得业界的高度认可。广州市三大国有租车三大国有三大国有", // 公司简介
                "scale": "500人", // 公司规模
                "tags": ["生日祝福", "管三餐"], // 标签
                "label": [ {hot: '人气'}] // 认证标签

            }
        ],
        "next": 0 // 0 for end, and 1 for next page
    }
}

module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}