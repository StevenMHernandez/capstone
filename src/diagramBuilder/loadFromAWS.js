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
module.exports = function (region, tag, requestedResource, callback) {
    AWS.config.update({region: 'us-east-1'});

    var resourcegroupstaggingapi = new AWS.ResourceGroupsTaggingAPI();

    var params = {};
    var ec2 = new AWS.EC2();
    var elb = new AWS.ELB();
    var rds = new AWS.RDS();

    switch (requestedResource) {
        case ("EC2"):
            ec2.describeTags(params, function (err, data) {
                callback(data);
            });
            break;
        case("ELB"):
            elb.describeTags(params, function (err4, data) {
                callback(data);
            });
            break;
        case("RDS"):
            rds.describeDBSecurityGroups(params, function (err5, data) {
                callback(data);
            });
            break;
        default:
            resourcegroupstaggingapi.getResources(params, function (err, data) {
                callback(data);
            });
    }
};



