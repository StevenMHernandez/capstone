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
    AWS.config.update({region: 'us-east-1'});

    var resourcegroupstaggingapi = new AWS.ResourceGroupsTaggingAPI();
    var ec2 = new AWS.EC2();

    var params = {};
    var ec2 = new AWS.EC2();
    var elb = new AWS.ELB();
    var rds = new AWS.RDS();

    var resourcegroupstaggingapi = new AWS.ResourceGroupsTaggingAPI();
    resourcegroupstaggingapi.getResources(params, function (err, data) {
        ec2.describeTags(params,function (err,data){
            console.log("Describe EC2 Tags:");
            console.log(data);

            // TODO: this callback should have all data
            // EC2 data, Subnet data, Security Group etc.
            callback(data);
        });
        ec2.describeSubnets(params, function (err2, data2) {
            console.log("Describe EC2 Subnets:");
            console.log(data2);
        });
        ec2.describeSecurityGroups(params, function (err3, data3) {
            console.log("EC2 Security Groups:");
            console.log(data3
                /*.SecurityGroups[0].IpPermissions*/ //This is to see in detail the permissions
                );
        });
        elb.describeTags(params, function (err4, data4) {
            console.log("elb tags");
            console.log(data4);
        });

        rds.describeDBSecurityGroups(params, function (err5, data5) {
            console.log("Security Groups for rds DBS:");
            console.log(data5);
        });
    });

};



