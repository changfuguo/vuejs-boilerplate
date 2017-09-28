var RETURN  = {
    "errno": 0,
    "error": "",
    "data": {
        "status": 0, // 1=已确认，0=未确认【按钮可点击】
        "intention": "选择接受分配，滴滴将为你指定一家专属司机管理公司，为您提供一对一的咨询和服务" // 文案描述
    }
};

module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}