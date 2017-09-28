var RETURN =
{
    errno: "0",
    error: "",
    data: [
        {
            "name": "黑色",
            "color": "#313131"
        },
        {
            "name": "银色(灰)",
            "color": "#E8E8E8"
        },
        {
            "name": "白色(米/香槟)",
            "color": "#FFFFFF"
        },
        {
            "name": "红色",
            "color": "#FF5431"
        },
        {
            "name": "金色",
            "color": "#C4903A"
        },
        {
            "name": "蓝色",
            "color": "#4081E4"
        },
        {
            "name": "棕色(褐/咖啡)",
            "color": "#804217"
        },
        {
            "name": "紫色",
            "color": "#A82ABE"
        },
        {
            "name": "绿色",
            "color": "#57CE8B"
        },
        {
            "name": "粉色",
            "color": "#E533AC"
        },
        {
            "name": "黄色",
            "color": "#F7BD4A"
        }
    ]
}


module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}