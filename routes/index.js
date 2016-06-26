var express = require('express');
var router = express.Router();

/* GET homepage. */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = db.get('algorithms');
  var pickedLang = req.query.lang.toLowerCase();
  var pickedAlg = req.query.alg.toLowerCase();

  collection.findOne({ "lang": pickedLang }, {}, function(event, docs) {
    var algInfo = {
      "algorithm": docs.alg[pickedAlg].algorithm,
      "language": docs.lang,
      "space": docs.alg[pickedAlg].space,
      "time": docs.alg[pickedAlg].time
    };

    res.render('index', algInfo);
  });
});

module.exports = router;
