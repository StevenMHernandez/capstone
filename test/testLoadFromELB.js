var assert = require('chai').assert;
var loadELB = require('../src/diagramBuilder/loadELB');

var region = 'us-east-1';
var tag = 'PROD_SERVER';

describe('testLoadFromAWS', function () {
    describe('ELB', function () {
        it('should return data for ELB resources', function () {
            return loadELB(region, tag).then(function (allData) {
                assert.isObject(allData);
                assert.isAbove(allData.Tags.length, 0);
                done();
            });
        });
    });
})
