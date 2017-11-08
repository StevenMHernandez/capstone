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

    var params = {
        TagFilters: [
            {
                Key: "ASV",
                Values: [tag]
            }
        ]
    };

    resourcegroupstaggingapi.getResources(params, function (err, data) {
        if (err) {
            console.error(err, err.stack);
        } else {
            // TODO: handle pagination

            console.log(data);

            for (var i = 0; i < data.ResourceTagMappingList.length; i++) {
                var resource = data.ResourceTagMappingList[i];

                console.log(resource, resource.Tags);
                console.log();
                console.log();

                // TODO: Build a parser for ResourceARNs
                var type = resource.ResourceARN.split("/")[0].split(":")[5];
                var instanceId = resource.ResourceARN.split("/")[1];

                if (type == 'instance') {
                    var ec2Params = {
                        Attribute: 'groupSet',
                        InstanceId: instanceId
                    };

                    ec2.describeInstanceAttribute(ec2Params, function (err, data) {
                        if (err) {
                            console.error(err, err.stack)
                        } else {
                            console.log(err, data);
                        }
                    });
                }
            }

            callback(data);
        }
    });
};