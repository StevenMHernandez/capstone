var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
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
        ec2.describeInstances(params, function (err, data) {
            var instances = [];

            data.Reservations.forEach(function (r) {
                r.Instances.forEach(function (instance) {
                    instances.push(instance)
                });
            });

            resolve(instances);
        });
    });
}

module.exports = loadEC2;
