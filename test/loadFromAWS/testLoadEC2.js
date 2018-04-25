var assert = require('chai').assert;
var loadEC2 = require('../../src/diagramBuilder/loadFromAWS/loadEC2');

var region = 'us-east-1';
var tag = 'PROD_SERVER';

describe('testLoadEC2', function () {
    it('should return a promise', function () {
        assert.equal(typeof loadEC2(region, tag, "EC2"), 'object'); // loadEC2 should return a promise (an object)
        assert.equal(typeof loadEC2(region, tag, "EC2").then, 'function'); // promises have the `then` function defined
    });

    it('should return an array of EC2 instances from the promise', function () {
        loadEC2(region, tag, "EC2").then(function (ec2Data) {
            assert.isArray(ec2Data);
            assert.isAbove(ec2Data.length, 0);
            assert.isAbove(ec2Data[0].Tags.length, 0);
        });
    });
});