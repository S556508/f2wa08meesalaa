var express = require('express');

var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

  var value = Math.floor(Math.random() *20)

  var value1 = Math.floor(Math.random() *20)

  var value2 = Math.floor(Math.random() *20)

  var imu = Math.imul(value);

  var logg = Math.log(value1);

  var logg_10 = Math.log10(value2);

  res.render('computation', { title: 'Meesala AdiLakshmi', 
  value:value,

  value1:value1,

  value2:value2,

  imu:imu,

  logg:logg,

  logg_10:logg_10,

});

});


module.exports = router;
