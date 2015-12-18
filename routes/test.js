/**
 * Created by spider on 15/11/20.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req,res,next) {
    res.render('test',{title:'test',content:'It is a test!'});
    //console.log('XXX'+settings);
    //res.sendFile('test.html',{root:CONFIG.DIR.PUBLIC});
});

module.exports=router;