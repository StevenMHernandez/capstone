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
    var ec2KeyData = "Name of EC2 Server with ASV tags ";
    var elbTags = "\n";
    var ec2SecurityGroups = "";
    var dbSecurityGroups = "";


    switch (requestedResource) {
        case ("EC2"):
            ec2.describeTags(params, function (err, data) {
                callback(data);
                for(i=1; i<data.Tags.length; i++){
                    if (data.Tags[i].Key == "ASV") {
                        ec2KeyData += data.Tags[i].Value + " ";
                    }
                }
                console.log(ec2KeyData);
            });
            break;
        case("ELB"):
            elb.describeTags(params, function (err4, data) {
                callback(data);
                for(i=1; i<data.TagDescriptions.length; i++) {
                    elbTags += data.TagDescriptions[i].LoadBalancerName + " ";
                }
                console.log(elbTags);
            });
            break;
        case("RDS"):
            rds.describeDBSecurityGroups(params, function (err5, data) {
                callback(data);
                for(i=1; i<data.DBSecurityGroups.length; i++) {
                    ec2SecurityGroups = data.DBSecurityGroups[i].EC2SecurityGroups + " ";
                    dbSecurityGroups = data.DBSecurityGroups[i].DBSecurityGroupName + " ";
                }
                console.log(ec2SecurityGroups);
                console.log(dbSecurityGroups);
            });
            break;
        default:
            resourcegroupstaggingapi.getResources(params, function (err, data) {
                callback(data);
            });
    }


};



