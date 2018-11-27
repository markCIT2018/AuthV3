var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require ('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/register', function(req, res, next) {
  res.render('register');
});


router.post('/register', function(req, res, next) {
var email = req.body.email;
var password = req.body.password;
var role = req.body.role;

  console.log(email);
  console.log(password);
  console.log(role);
res.location('/');
res.redirect('/');

var newUser = new User({
  email: email,
  password: password,
  role: role
});
User.createUser(newUser,function(err,user){
if (err)throw err;
console.log(user);
 });

});





router.get('/login', function(req, res, next) {
  res.render('login');
});











module.exports = router;
