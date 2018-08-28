var express = require('express');
var denf = require('../models/funs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    url = 'https://x.miguan.in/otc/recently';
    denf(url,function (callback) {
        res.send(callback);
    });
});

module.exports = router;