var express = require('express');
var router = express.Router();
let time=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  time = time+1;
  res.send('User accesses are: ${time}');
});

module.exports = router;
