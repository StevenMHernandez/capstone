var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
/**
 * Load raw data from AWS.
 * This function should simply load the data that we need.
 * Formatting/processing will occur elsewhere.
 *
 * @param region
 * @param tag
 * @param callback
 */
var ec2 = new AWS.EC2();
var params = {};
function loadEC2(region, tag) {
    // always initialize all instance properties
    this.region = region;
    this.tag = tag;
    this.requestedResource = "EC2";
    return new Promise(function (resolve, reject) {
        ec2.describeTags(params, function (err, data) {
            resolve(data);
        });
    });
}

module.exports = loadEC2;
