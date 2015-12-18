var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.send("originUrl:"+res.originalUrl+"baseUrl:"+res.baseUrl);
});

router.get('/login', function(req, res, next) {
  //res.send('respond with a resource');
  res.send("originUrl:"+req.originalUrl+"baseUrl:"+req.baseUrl);
});

module.exports = router;
