var express = require('express');
var router = express.Router();
var findAlgLang = require('../public/javascripts/findAlgLang');

/* GET homepage. */
router.get('/', function(req, res) {
  
  if (req.query.length > 2 || req.query.lang === undefined || req.query.alg === undefined) {
    res.redirect('/?lang=ruby&alg=bubble');
  }
  else {
    var db = req.db;
    var collection = db.get('algorithms');
    var pickedLang = req.query.lang.toLowerCase();
    var pickedAlg = req.query.alg.toLowerCase();

    findAlgLang(collection, pickedAlg, pickedLang, res);
  }
});

module.exports = router;
