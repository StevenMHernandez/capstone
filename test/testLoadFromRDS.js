var assert = require('chai').assert;
var loadRDS = require('../src/diagramBuilder/loadRDS');

var region = 'us-east-1';
var tag = 'PROD_SERVER';

describe('testLoadRDS', function () {
    describe('RDS', function () {
        it('should return data for RDS resources', function () {
            return loadRDS(region, tag).then(function (allData) {
                assert.isObject(allData);
                assert.isAbove(allData.Tags.length, 0);
            });
        });
    });
})
