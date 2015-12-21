var express = require('express');
var utility = require('utility');
var superagent = require('superagent');
var cheerio = require('cheerio');

var models = require('../models');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //var q = req.query.q;
    //if(q){
    //  var md5Value=utility.md5(q)
    //}else{
    //  res.send('没有传入参数q');
    //  return ;
    //}
    //
    //console.log(md5Value);
    //res.render('index', { title: 'Express',param:'test',md5Value:'test' });
    //superagent.get('http://cnodejs.org/').end(function (err, sres) {
    //    //常规错误处理
    //    if (err) {
    //        return next(err);
    //    }
    //
    //    var $ = cheerio.load(sres.text);
    //    var items = [];
    //    $('#topic_list .topic_title').each(function (idx, element) {
    //        var $element = $(element);
    //        items.push({
    //            title: $element.attr('title'),
    //            href: $element.attr('href')
    //        })
    //    });
    //    res.send(items);
    //res.render('index', items);
    //});
    //req.session.test="this will be store in session!";
    //res.send(req.session.test);
    //res.send("Express is Running...");

    models['User']
        .findAll().then(function (user) {
        var items = user;
        res.render('index',{items:user});
        //res.send(items);
    });
});


router.get('/session', function (req, res) {

    // 检查 session 中的 isVisit 字段
    // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
    if (req.session.isVisit) {
        req.session.isVisit++;
        res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>');
    } else {
        req.session.isVisit = 1;
        res.send("欢迎第一次来这里");
        //res.send(req.session);
        console.log(req.session);
    }
});

router.get('/save', function (req, res) {
    //console.dir(models['User']);
    models['User']
        .create({
        username: 'janedoe',
        password: '78945354'
    }).then(function (jane) {
        console.log(jane.get({
            plain: true
        }));
    });

    res.send('save user spider success!');
});

module.exports = router;
