var RETURN = {
        errno: "0",
        error: "",
        data: {}
    }
}


module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}