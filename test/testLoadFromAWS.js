var assert = require('chai').assert;
var loadFromAWS = require('../src/diagramBuilder/loadFromAWS');

var region = 'us-east-1';
var tag = 'PROD_SERVER';

describe('testLoadFromAWS', function () {
    describe('RDS', function () {
        it('should return data for RDS instances', function () {
            return loadFromAWS(region, tag, "RDS").then(function (allData) {
                console.log(allData);
                assert.isAbove(allData.DBSecurityGroups.length, 0);
            });
        });
    });

    describe('other', function () {
        it('AWS should return data for anything else', function () {
            return loadFromAWS(region, tag, "other").then(function (allData) {
                assert.isObject(allData);
                assert.isAbove(allData.ResourceTagMappingList.length, 0);
            });
        });
    });
});