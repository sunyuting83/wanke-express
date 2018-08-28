var express = require('express');
var denf = require('../models/funs');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
	url = 'https://x.miguan.in/otc/v7/monitorRecordList?orderBy=turnover';
	denf(url, function (callback) {
		res.send(callback);
	});
});

module.exports = router;