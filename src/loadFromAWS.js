var AWS = require('aws-sdk');

/**
 * Load raw data from AWS.
 * This function should simply load the data that we need.
 * Formatting/processing will occur elsewhere.
 *
 * @param region
 * @param tag
 * @param callback
 */
module.exports = function (region, tag, callback) {
    AWS.config.update({region: region});

    var params = {};

    var resourcegroupstaggingapi = new AWS.ResourceGroupsTaggingAPI();
    resourcegroupstaggingapi.getResources(params, function (err, data) {
        if (err) {
            console.error(err, err.stack);
        }
        else {
            callback(data);
        }
    });
};