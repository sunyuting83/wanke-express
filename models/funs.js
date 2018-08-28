const superagent = require('superagent');

// 获取远程数据
function getDatas(url, callback) {
    superagent.get(url) //请求页面地址
        .set({
            'accept': 'application/json, text/plain, */*',
            'Origin': 'https://t.miguan.in',
            'Referer': 'https://t.miguan.in/monitor',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest'
        })
        .end(function (err, sres) { //页面获取到的数据
            if (err) return callback([]);
            return callback(sres.text);
        });
}

module.exports = getDatas;