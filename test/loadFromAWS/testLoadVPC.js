var assert = require('chai').assert;
var loadVPC = require('../../src/diagramBuilder/loadFromAWS/loadVPC');

var region = 'us-east-1';
var tag = 'PROD_SERVER';

describe('testLoadVPC', function () {
    it('should return a promise', function () {
        assert.equal(typeof loadVPC(region, tag, "VPC"), 'object'); // loadVPC should return a promise (an object)
        assert.equal(typeof loadVPC(region, tag, "VPC").then, 'function'); // promises have the `then` function defined
    });

    it('should return an array of VPCs from the promise', function () {
        loadVPC(region, tag, "VPC").then(function (vpcData) {
            assert.isArray(vpcData);
            assert.isAbove(vpcData.length, 0);
            assert.isAbove(vpcData[0].Tags.length, 0);
        });
    });
});