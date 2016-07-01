var express = require('express');
var router = express.Router();
var findAlgLang = require('../public/javascripts/findAlgLang');

/* GET homepage. */
router.get('/', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  findAlgLang(req, res);
});

module.exports = router;
