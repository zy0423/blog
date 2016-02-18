/**
 * Created by zy on 2016/2/18.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    /*res.send('respond with a resource');*/
    res.render('full', {title: 'Kuye'});
});

module.exports = router;

