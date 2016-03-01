/**
 * Created by zy on 2016/3/1.
 */

var db = require('../db/mongoConnect');


module.exports = function () {
    var articleSchema = db.mongoose.Schema({
        title: String,
        content: String,
        author: String,
        date: Date,
        tags: [String],
        categorie: String
    });

    var article = db.mongoose.model('article', articleSchema);

    return article;
};