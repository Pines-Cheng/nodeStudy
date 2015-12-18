/**
 * Created by spider on 15/11/18.
 */

// file: test/main.test.js
var main = require('../lesson6');
var should = require('should');
//var moc

describe('test/main.test.js', function () {
    it('should equal 55 when n === 10', function () {
        main.fibonacci(10).should.equal(55);
    });
});
