var RETURN  = {
    "errno": 0,
    "error": "",
    "data": {
        "is_sign": 0 // 0=未签约【按钮可点击】，1=已签约【按钮置灰】
    }
};

module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}