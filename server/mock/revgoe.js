var RETURN = {
    "errno": "0",
    "error": "",
    "data": {
        "city_id" : 1,
        "city_name":"北京市"
    }
}

module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}