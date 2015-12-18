/**
 * Created by spider on 15/11/17.
 */
'use strict'

var child_process = require('child_process');
var util = require('util');

function copy(src,dest,callback){
    child_process.exec(util.format('cp  %s %s', src, dest), callback);
}

copy('./process.js','./bin/process.js', function (err) {
    if(err){
        console.log(err);
    }
})

console.log(process.argv)
