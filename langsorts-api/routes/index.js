var express = require('express');
var router = express.Router();
var findAlgLang = require('../public/javascripts/findAlgLang');

/* GET homepage. */
router.get('/', function(req, res) {
  findAlgLang(req, res);
});

module.exports = router;
