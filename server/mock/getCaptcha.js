//var RETURN = {"errno":"0","error":"","data":{"attribute":{"flow":17566454053,"online_percent":94.13813116657,"serve_time":468106.84,"fee_time":267601.7815873,"complaint_percent":4.3291832941562,"badstar_percent":75.086611183737,"cancel_percent":8.1146107763809},"org_name":"\u6d4b\u8bd5\u516c\u53f8-\u674e\u6167","flow_curve":[{"timepoint":1,"yesterday":1025684066,"today":957221856},{"timepoint":2,"yesterday":2042199790,"today":1925188274},{"timepoint":3,"yesterday":3055436581,"today":2950530584},{"timepoint":4,"yesterday":4078648433,"today":3975693332},{"timepoint":5,"yesterday":5105729981,"today":5002404687},{"timepoint":6,"yesterday":6138157164,"today":6019963716},{"timepoint":7,"yesterday":7167703643,"today":7047696286},{"timepoint":8,"yesterday":8200476858,"today":8076402632},{"timepoint":9,"yesterday":9228126845,"today":9103435372},{"timepoint":10,"yesterday":10240227667,"today":10128645362},{"timepoint":11,"yesterday":11185015855,"today":11119507823},{"timepoint":12,"yesterday":12119420351,"today":12055156170},{"timepoint":13,"yesterday":13079300577,"today":12987983800},{"timepoint":14,"yesterday":14029341765,"today":13929453998},{"timepoint":15,"yesterday":14957194249,"today":14868837147},{"timepoint":16,"yesterday":15893965315,"today":15557888585},{"timepoint":17,"yesterday":16833135793,"today":16134773905},{"timepoint":18,"yesterday":17768640399,"today":16701420175}]}}

var RETURN = {
	errno:0,
	data:{
	   	"hash1":431,
	   	"hash2":431,
	   	"url":"http://didiwave.xiaojukeji.com/Signup/Signup/getCaptcha/v/583efc71139d9"
   	}
}


module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}