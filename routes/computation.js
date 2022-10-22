var express = require('express');
var router = express.Router();
var value;

/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    value=Number(search_params.get("x"))
    if(value==0)
    value=Math.random()
    res.write("computing the values of Math.imul,math.log and math.log10. "+"\n")
    res.write('Math.imul is applied to '+value+" is " +Math.imul(value)+"\n");
    res.write('Math.log is applied to '+value+" is " +Math.log(value)+"\n");
    res.write('Math.log10 is applied to '+value+" is " +Math.log10(value));
});

module.exports = router;
