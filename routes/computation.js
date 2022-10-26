var express = require('express');

var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

  var value = Math.random() *20;

  var value1 = Math.random() *20;

  var value2 = Math.random() *20;

  var imul = Math.imul(value);

  var log = Math.log(value1);

  var log10 = Math.log10(value2);

  res.render('compute', { title: 'Meesala AdiLakshmi', 
  value:value,

  value1:value1,

  value2:value2,

  imul:imul,

  log10:log10,

  asinh:asinh

});

});


module.exports = router;
