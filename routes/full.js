/**
 * Created by zy on 2016/2/18.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

    var data =
    {
        title: 'Kuye',
        recentPosts: [{id: 1, title: ""}, {id: 2, title: ""}, {id: 3, title: ""}],
        archives: [{id: 1, date: ""}, {id: 2, date: ""}, {id: 3, date: ""}],
        categorys: [{id: 1, category: ""}, {id: 2, category: ""}, {id: 3, category: ""}]
    };

    res.render('full', data);
});

module.exports = router;

