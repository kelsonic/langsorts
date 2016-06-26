module.exports = function(collection, pickedAlg, pickedLang, res) {
  collection.findOne({ "lang": pickedLang }, {}, function(event, docs) {

    console.log(collection);
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