var RETURN = {
    "errno": "0",
    "error": "",
    "data": {
        "type": 5, // 0、春笋  1、直招  2、司管  3、车管，
        "data": {
            pilotCity:[2, 3, 5, 6, 7, 8, 9, 10, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 32, 33, 34]
        }
    }
}

module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}