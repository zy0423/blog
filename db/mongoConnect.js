/**
 * Created by zy on 2016/2/17.
 */

var mongoose = require('mongoose');
var config = require('./config');


module.exports = function () {
    /**
     * mongodb:连接配置
     */
    mongoose.connect('mongodb://' + config.db.url + ':' + config.db.port + '/' + config.db.dbName)

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

    return mongoConnect;
};