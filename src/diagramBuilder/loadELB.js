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
var elb = new AWS.ELB();
var params = {};

function loadELB(region, tag) {
    // always initialize all instance properties
    this.region = region;
    this.tag = tag;
    return new Promise(function (resolve, reject) {
        elb.describeLoadBalancers(params, function (err4, data) {
            resolve(data.LoadBalancerDescriptions);
        });
    })
}

// export the class
module.exports = loadELB;

