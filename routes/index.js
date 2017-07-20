var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/team', function(req, res, next) {
  res.render('team');
});
router.get('/service', function(req, res, next) {
  res.render('service');
});
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
