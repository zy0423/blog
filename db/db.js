/**
 * Created by zy on 2016/2/17.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

var db = mongoose.connection;
/*db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function (callback) {
 console.log.bind(console, 'connection succeed')
 });*/

module.exports = db;