var assert = require('chai').assert;
var loadEC2 = require('../src/diagramBuilder/loadEC2');

var region = 'us-east-1';
var tag = 'PROD_SERVER';

describe('testLoadFromEC2', function () {
    describe('EC2', function () {
        it('should return data for EC2 instances', function () {
            return loadEC2(region, tag, "EC2").then(function (allData) {
                assert.isObject(allData);
                assert.isAbove(allData.Tags.length, 0);
            });
        });
    });
})