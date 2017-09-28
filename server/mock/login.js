var RETURN  = {
    "errno": "0",
    "error": "",
    "data": {
        "driver_id": 1,
        "driver_phone": "15214734341",
        "city_id": 1,
        'city_name': "天津",
        "driver_name": "魏大星",
        "driver_cardid": "1201091993070204515",
        "driver_license_date": "1993-07-20",
        "driver_data_status": 1,
        "driver_intention": "b",
    }
};

module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}