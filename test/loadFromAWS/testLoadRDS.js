var assert = require('chai').assert;
var loadRDS = require('../../src/diagramBuilder/loadFromAWS/loadRDS');

var region = 'us-east-1';
var tag = 'PROD_SERVER';

describe('testLoadRDS', function () {
    it('should return a promise', function () {
        assert.equal(typeof loadRDS(region, tag, "RDS"), 'object'); // loadRDS should return a promise (an object)
        assert.equal(typeof loadRDS(region, tag, "RDS").then, 'function'); // promises have the `then` function defined
    });

    it('should return an array of RDS instances from the promise', function () {
        loadRDS(region, tag, "RDS").then(function (rdsData) {
            assert.isArray(rdsData);
            assert.isAbove(rdsData.length, 0);
            assert.isAbove(rdsData[0].Tags.length, 0);
        });
    });
});