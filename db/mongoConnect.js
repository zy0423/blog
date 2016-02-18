/**
 * Created by zy on 2016/2/17.
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')

var mongoConnect = {db: mongoose.connection, mongoose: mongoose};

/**
 * 连接异常回调
 */
mongoConnect.db.on('error', console.error.bind(console, 'connection error:'));

/**
 * 连接成功回调
 */
mongoConnect.db.once('open', function (callback) {
    console.log.bind(console, 'connection succeed')
});

module.exports = mongoConnect;