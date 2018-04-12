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
var rds = new AWS.RDS();
var params = {};
function loadRDS(region, tag) {
    // always initialize all instance properties
    this.region = region;
    this.tag = tag;
    this.requestedResource = "RDS";
    return new Promise(function (resolve, reject) {
        rds.describeDBSecurityGroups(params, function (err5, data) {
            resolve(data);
            for (i = 1; i < data.DBSecurityGroups.length; i++) {
                ec2SecurityGroups += data.DBSecurityGroups[i].EC2SecurityGroups + " ";
                dbSecurityGroups += data.DBSecurityGroups[i].DBSecurityGroupName + " ";
            }
        });
    });

// export the class
    module.exports = loadRDS;


// module.exports = function (region, tag, requestedResource) {
//     var params = {};
//     var ec2 = new AWS.RDS();
//
//             rds.describeTags(params, function (err, data) {
//
//                 resolve(data);
//
//                 });
// }