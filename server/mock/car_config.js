/**
 * Created by didi on 20/06/2017.
 */
var RETURN = {
    errno: "0",
    error: "",
    data: {
        'brand': {
            A: [
                {
                    brand_id: 4,
                    brand_name: "奥迪"
                },
                {
                    brand_id: 88,
                    brand_name: "阿斯顿·马丁"
                }
            ],
            B: [
                {
                    brand_id: 1,
                    brand_name: "奔驰"
                },
                {
                    brand_id: 23,
                    brand_name: "奔腾"
                },
                {
                    brand_id: 12,
                    brand_name: "本田"
                },
            ],
        },
        'price': [
            {
                type: 1,
                value: "全部"
            },
            {
                type: 2,
                value: "1.0万以下"
            },
        ],
        'power': [
            {
                type: -1,
                value: "不限"
            },
            {
                type: 2,
                value: "燃油"
            },
        ]
    }
}

module.exports = function (req, res, next) {
    setTimeout(function () {
        res.json(RETURN);
    }, 1000);
};