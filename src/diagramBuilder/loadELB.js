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
var elb = new AWS.ELB();
var elbTags = "";
var params = {};
function loadELB(region, tag) {
    // always initialize all instance properties
    this.region = region;
    this.tag = tag;
    this.requestedResource = "ELB";
    return new Promise(function (resolve, reject) {
        elb.describeTags(params, function (err4, data) {
            resolve(data);
            for (i = 1; i < data.TagDescriptions.length; i++) {
                elbTags += data.TagDescriptions[i].LoadBalancerName + " ";
            }
        });
    })

// export the class
}   module.exports = loadELB;


// module.exports = function (region, tag, requestedResource) {
//     var params = {};
//     var elb = new AWS.ELB();
//
//             rds.describeTags(params, function (err, data) {
//
//                 resolve(data);
//
//                 });
// }