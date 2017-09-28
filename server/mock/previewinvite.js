var RETURN = {
  "errno": 0,  // 030001 错误码固定为该链接已失效
  "error": "",
  "data" : {
      "invite_name" : "张铁柱",
      "invite_img" : "https://cn.vuejs.org/images/logo.png"
  }
}

module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}