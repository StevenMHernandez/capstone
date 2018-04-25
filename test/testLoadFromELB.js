var assert = require('chai').assert;
var loadELB = require('../src/diagramBuilder/loadELB');

var region = 'us-east-1';
var tag = 'PROD_SERVER';

describe('testLoadELB', function () {
    describe('ELB', function () {
        it('should return data for ELB resources', function () {
            return loadELB(region, tag).then(function (allData) {
                assert.isArray(allData);
                assert.isAbove(allData.length, 0);
            });
        });
    });
})
