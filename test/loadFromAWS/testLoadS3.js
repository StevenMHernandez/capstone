var assert = require('chai').assert;
var loadS3 = require('../../src/diagramBuilder/loadS3');

var region = 'us-east-1';
var tag = 'PROD_SERVER';

describe('testLoadS3', function () {
    it('should return a promise', function () {
        assert.equal(typeof loadS3(region, tag, "S3"), 'object'); // loadS3 should return a promise (an object)
        assert.equal(typeof loadS3(region, tag, "S3").then, 'function'); // promises have the `then` function defined
    });

    it('should return an array of S3 buckets from the promise', function () {
        loadS3(region, tag, "S3").then(function (s3Data) {
            assert.isArray(s3Data);
            assert.isAbove(s3Data.length, 0);
            assert.isAbove(s3Data[0].Tags.length, 0);
        });
    });
});