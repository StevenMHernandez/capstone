var assert = require('chai').assert;
var loadElasticCache = require('../../src/diagramBuilder/loadFromAWS/loadElasticCache');

var region = 'us-east-1';
var tag = 'PROD_SERVER';

describe('testLoadElasticCache', function () {
    it('should return a promise', function () {
        assert.equal(typeof loadElasticCache(region, tag, "ElasticCache"), 'object'); // loadElasticCache should return a promise (an object)
        assert.equal(typeof loadElasticCache(region, tag, "ElasticCache").then, 'function'); // promises have the `then` function defined
    });

    it('should return an array of ElasticCaches from the promise', function () {
        loadElasticCache(region, tag, "ElasticCache").then(function (elasticCacheData) {
            assert.isArray(elasticCacheData);
            assert.isAbove(elasticCacheData.length, 0);
            assert.isAbove(elasticCacheData[0].Tags.length, 0);
        });
    });
});