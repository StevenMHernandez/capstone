var assert = require('chai').assert;
var loadELB = require('../../src/diagramBuilder/loadFromAWS/loadELB');

var region = 'us-east-1';
var tag = 'PROD_SERVER';

describe('testLoadELB', function () {
    it('should return a promise', function () {
        assert.equal(typeof loadELB(region, tag, "ELB"), 'object'); // loadELB should return a promise (an object)
        assert.equal(typeof loadELB(region, tag, "ELB").then, 'function'); // promises have the `then` function defined
    });

    it('should return an array of ELBs from the promise', function () {
        loadELB(region, tag, "ELB").then(function (elbData) {
            assert.isArray(elbData);
            assert.isAbove(elbData.length, 0);
            assert.isAbove(elbData[0].Tags.length, 0);
        });
    });
});