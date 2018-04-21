var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
var rds = new AWS.RDS();
var params = {};

/**
 * Load raw data from AWS.
 * This function should simply load the data that we need.
 * Formatting/processing will occur elsewhere.
 *
 * @param region
 * @param tag
 * @param callback
 */

function loadRDS(region, tag) {
    // always initialize all instance properties
    this.region = region;
    this.tag = tag;
    return new Promise(function (resolve, reject) {
        rds.describeDBInstances(params, function (err5, data) {
            resolve(data.DBInstances);
        });
    });
}

module.exports = loadRDS;
