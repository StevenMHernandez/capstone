var AWS = require('aws-sdk');
var loadEC2 = require('./loadEC2');
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
    var globalTest = "";
    var ec2KeyData = "";
    var elbTags = "";
    var ec2SecurityGroups = "";
    var dbSecurityGroups = "";

        return new Promise(function (resolve, reject) {
            switch (requestedResource) {
                case ("EC2"):
                    resolve(loadEC2(region,tag,requestedResource));
                    break;

                case("ELB"):
                    elb.describeTags(params, function (err4, data) {
                        resolve(data);
                        for (i = 1; i < data.TagDescriptions.length; i++) {
                            elbTags += data.TagDescriptions[i].LoadBalancerName + " ";
                        }
                    });
                    break;
                case("RDS"):
                    rds.describeDBSecurityGroups(params, function (err5, data) {
                        resolve(data);
                        for (i = 1; i < data.DBSecurityGroups.length; i++) {
                            ec2SecurityGroups += data.DBSecurityGroups[i].EC2SecurityGroups + " ";
                            dbSecurityGroups += data.DBSecurityGroups[i].DBSecurityGroupName + " ";
                        }
                    });
                    break;
                default:
                    resourcegroupstaggingapi.getResources(params, function (err, data) {
                        resolve(data);
                    });
            }
        });

};



