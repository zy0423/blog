var express = require('express');
var router = express.Router();

var db = require('../db/mongoConnect');
var mongoose = db.mongoose;

var kittySchema = mongoose.Schema({
  name: String
})

kittySchema.methods.speak = function () {
  var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name"
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema)

var fluffy = new Kitten({name: 'fluffy'});
// "Meow name is fluffy"
//fluffy.speak();


/* GET home page. */
router.get('/', function(req, res, next) {

  /*  fluffy.save(function (err, fluffy) {
   if (err) return console.error(err);
   fluffy.speak();
   });*/

  /*
  Kitten.find({name: 'fluffy'}, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens)
  })
   */

  res.render('index', {title: 'Kuye'});
});

module.exports = router;
