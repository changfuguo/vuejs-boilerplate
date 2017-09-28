//var RETURN = {"errno":"0","error":"","data":{"attribute":{"flow":17566454053,"online_percent":94.13813116657,"serve_time":468106.84,"fee_time":267601.7815873,"complaint_percent":4.3291832941562,"badstar_percent":75.086611183737,"cancel_percent":8.1146107763809},"org_name":"\u6d4b\u8bd5\u516c\u53f8-\u674e\u6167","flow_curve":[{"timepoint":1,"yesterday":1025684066,"today":957221856},{"timepoint":2,"yesterday":2042199790,"today":1925188274},{"timepoint":3,"yesterday":3055436581,"today":2950530584},{"timepoint":4,"yesterday":4078648433,"today":3975693332},{"timepoint":5,"yesterday":5105729981,"today":5002404687},{"timepoint":6,"yesterday":6138157164,"today":6019963716},{"timepoint":7,"yesterday":7167703643,"today":7047696286},{"timepoint":8,"yesterday":8200476858,"today":8076402632},{"timepoint":9,"yesterday":9228126845,"today":9103435372},{"timepoint":10,"yesterday":10240227667,"today":10128645362},{"timepoint":11,"yesterday":11185015855,"today":11119507823},{"timepoint":12,"yesterday":12119420351,"today":12055156170},{"timepoint":13,"yesterday":13079300577,"today":12987983800},{"timepoint":14,"yesterday":14029341765,"today":13929453998},{"timepoint":15,"yesterday":14957194249,"today":14868837147},{"timepoint":16,"yesterday":15893965315,"today":15557888585},{"timepoint":17,"yesterday":16833135793,"today":16134773905},{"timepoint":18,"yesterday":17768640399,"today":16701420175}]}}

var RETURN = 
	{
    errno: "0",
    error: "",
    data: {
        org_name: "城市经理",
        attribute: {
            flow: 124.23,//今日流水
            online_percent: 52.32,//实时在线率
            serve_time: 9457,//平均服务时长
            fee_time: 6774,//平均计费时长
            complaint_percent: 6.2,//投诉率
            badstar_percent: 5.2,//低星率
            cancel_percent: 5.1//取消订单率
        },
        flow_curve: [ //曲线信息
            // ======= 测试数据1： 流量水金额 > 10000 ============
            //{
            //    timepoint: 0, //时间点
            //    yesterday: 0, //流水
            //    today:0
            //},{
            //    timepoint: 1,
            //    yesterday: 300,
            //    today: 12
            //},{
            //    timepoint: 2,
            //    yesterday: 500,
            //    today: 18
            //},{
            //    timepoint: 3,
            //    yesterday: 800,
            //    today: 23
            //},{
            //    timepoint: 4,
            //    yesterday: 1200,
            //    today: 26
            //},{
            //    timepoint: 5,
            //    yesterday: 1500,
            //    today: 23
            //},{
            //    timepoint: 6,
            //    yesterday: 3000,
            //    today: 28
            //},{
            //    timepoint: 7,
            //    yesterday: 5000,
            //    today: 23
            //},{
            //    timepoint: 8,
            //    yesterday: 8000,
            //    today: 22
            //},{
            //    timepoint: 9,
            //    yesterday: 12000,
            //    today: 23
            //},{
            //    timepoint: 10,
            //    yesterday: 15000,
            //    today: 27
            //},{
            //    timepoint: 11, //时间点
            //    yesterday: 18000, //流水
            //    today:21
            //},{
            //    timepoint: 12,
            //    yesterday: 20000,
            //    today: 10
            //},{
            //    timepoint: 13,
            //    yesterday: 22500,
            //    today: 23
            //},{
            //    timepoint: 14,
            //    yesterday: 24000,
            //    today: 23
            //},{
            //    timepoint: 15,
            //    yesterday: 25000,
            //    today: 26
            //},{
            //    timepoint: 16,
            //    yesterday: 27020,
            //    today: 33
            //},{
            //    timepoint: 17,
            //    yesterday: 30000,
            //    today: 28
            //},{
            //    timepoint: 18,
            //    yesterday: 32000,
            //    today: 23
            //},{
            //    timepoint: 19,
            //    yesterday: 34023,
            //    today: 22
            //},{
            //    timepoint: 20,
            //    yesterday: 36000,
            //    today: 23
            //},{
            //    timepoint: 21,
            //    yesterday: 38000,
            //    today: 27
            //},{
            //    timepoint: 22,
            //    yesterday: 39500,
            //    today: 19
            //},{
            //    timepoint: 23,
            //    yesterday: 42000,
            //    today: 27
            //},{
            //    timepoint: 24,
            //    yesterday: 85000,
            //    today: 30
            //}
            // ======= 测试数据2： 流量水金额区间 [1000, 9999) ============
            //{
            //    timepoint: 0, //时间点
            //    yesterday: 0, //流水
            //    today:0
            //},{
            //    timepoint: 1,
            //    yesterday: 30,
            //    today: 12
            //},{
            //    timepoint: 2,
            //    yesterday: 50,
            //    today: 18
            //},{
            //    timepoint: 3,
            //    yesterday: 80,
            //    today: 23
            //},{
            //    timepoint: 4,
            //    yesterday: 120,
            //    today: 26
            //},{
            //    timepoint: 5,
            //    yesterday: 150,
            //    today: 23
            //},{
            //    timepoint: 6,
            //    yesterday: 300,
            //    today: 28
            //},{
            //    timepoint: 7,
            //    yesterday: 500,
            //    today: 23
            //},{
            //    timepoint: 8,
            //    yesterday: 800,
            //    today: 22
            //},{
            //    timepoint: 9,
            //    yesterday: 850,
            //    today: 23
            //},{
            //    timepoint: 10,
            //    yesterday: 950,
            //    today: 27
            //},{
            //    timepoint: 11, //时间点
            //    yesterday: 990, //流水
            //    today:21
            //},{
            //    timepoint: 12,
            //    yesterday: 1000,
            //    today: 10
            //},{
            //    timepoint: 13,
            //    yesterday: 1250,
            //    today: 23
            //},{
            //    timepoint: 14,
            //    yesterday: 1400,
            //    today: 23
            //},{
            //    timepoint: 15,
            //    yesterday: 1500,
            //    today: 26
            //},{
            //    timepoint: 16,
            //    yesterday: 1702,
            //    today: 33
            //},{
            //    timepoint: 17,
            //    yesterday: 2000,
            //    today: 28
            //},{
            //    timepoint: 18,
            //    yesterday: 2200,
            //    today: 23
            //},{
            //    timepoint: 19,
            //    yesterday: 2403,
            //    today: 22
            //},{
            //    timepoint: 20,
            //    yesterday: 2600,
            //    today: 23
            //},{
            //    timepoint: 21,
            //    yesterday: 2800,
            //    today: 27
            //},{
            //    timepoint: 22,
            //    yesterday: 2950,
            //    today: 19
            //},{
            //    timepoint: 23,
            //    yesterday: 3000,
            //    today: 27
            //},{
            //    timepoint: 24,
            //    yesterday: 3500,
            //    today: 30
            //}
            // ======= 测试数据3： 流量水金额区间 < 1000 ============
            {
                timepoint: 1,
                yesterday: 30,
                today: 42
            },{
                timepoint: 2,
                yesterday: 50,
                today: 48
            },{
                timepoint: 3,
                yesterday: 80,
                today: 83
            },{
                timepoint: 4,
                yesterday: 120,
                today: 126
            },{
                timepoint: 5,
                yesterday: 150,
                today: 187
            },{
                timepoint: 6,
                yesterday: 200,
                today: 190
            },{
                timepoint: 7,
                yesterday: 300,
                today: 280
            },{
                timepoint: 8,
                yesterday: 360,
                today: 400
            },{
                timepoint: 9,
                yesterday: 450,
                today: 480
            },{
                timepoint: 10,
                yesterday: 500,
                today: 510
            },{
                timepoint: 11, //时间点
                yesterday: 520, //流水
                today:530
            },{
                timepoint: 12,
                yesterday: 550,
                today: 540
            },{
                timepoint: 13,
                yesterday: 560,
                today: 565
            },{
                timepoint: 14,
                yesterday: 570,
                today: 589
            },{
                timepoint: 15,
                yesterday: 600,
                today: 620
            },{
                timepoint: 16,
                yesterday: 632,
                today: 650
            },{
                timepoint: 17,
                yesterday: 650,
                today: 660
            },{
               timepoint: 18,
               yesterday: 680,
               today: 800
            },{
               timepoint: 19,
               yesterday: 723,
               today: 715
            },{
               timepoint: 20,
               yesterday: 700,
               today: 730
            },{
               timepoint: 21,
               yesterday: 720,
               today: 940
            },{
               timepoint: 22,
               yesterday: 750,
               today: 1160
            },{
               timepoint: 23,
               yesterday: 780,
               today: 1275
            },{
               timepoint: 24,
               yesterday: 790,
               today: 2499
            }
        ]
    }
}


module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}