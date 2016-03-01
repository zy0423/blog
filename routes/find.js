/**
 * Created by zy on 2016/3/1.
 */
var express = require('express');
var router = express.Router();

var data =
{
    title: 'Kuye',
    recentPosts: [{id: 1, value: "Node.js 搭建"}, {id: 2, value: "Hexo 搭建"}, {id: 3, value: "Sping Mvc"}],
    archives: [{id: 1, value: "2016年3月1日(2)"}, {id: 2, value: "2016年3月1日(2)"}, {id: 3, value: "2016年3月1日(2)"}],
    categorys: [{id: 1, value: "Node.js"}, {id: 2, value: "Hexo"}, {id: 3, value: "Java"}]
};

router.get('/archive/:id', function (req, res) {
    console.log('id:' + req.params.id);
    res.render('blogs', data);
});

router.get('/category/:id', function (req, res) {
    console.log('id:' + req.params.id);
    res.render('blogs', data);
});

module.exports = router;