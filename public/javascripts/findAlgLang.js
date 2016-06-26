module.exports = function(req, res) {
  if (req.query.length > 2 || req.query.lang === undefined || req.query.alg === undefined) {
    res.redirect('/?lang=ruby&alg=bubble');
  }
  else {
    queryDatabase(req, res);
  }
}

function queryDatabase(req, res) {
  
  var db = req.db;
  var collection = db.get('algorithms');
  var pickedLang = req.query.lang.toLowerCase();
  var pickedAlg = req.query.alg.toLowerCase();

  collection.findOne({ "lang": pickedLang }, {}, function(event, docs) {

    // If algorithm/language is not found in database
    if (docs === null || docs.alg[pickedAlg] === undefined) {
      res.status(404).send('Could not find ' + pickedAlg + ' or ' + pickedLang + ' in database.');
    }
    else {
      var algInfo = {
        "algorithm": docs.alg[pickedAlg].algorithm,
        "language": docs.lang,
        "space": docs.alg[pickedAlg].space,
        "time": docs.alg[pickedAlg].time
      };

      res.render('index', algInfo);
    }
  });
}