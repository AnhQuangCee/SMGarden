var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET cropSelection page. */
router.get('/CropSelection', function(req, res, next) {
  res.render('cropSelection', { title: 'Express' });
});

module.exports = router;
