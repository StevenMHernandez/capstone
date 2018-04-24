var assert = require('chai').assert;
var listASV = require('../src/listASV/index');

var region = 'us-east-1';
var tag = 'ASV';

describe('testListASV', function () {
    describe('asv', function () {
        it('should return data with tags of ASV', function () {
            return listASV().then(function(yourString) {
            console.log(yourString);
            assert.isString(yourString);
            });
        });
    });
});