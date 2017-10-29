var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});

var params = {};

var resourcegroupstaggingapi = new AWS.ResourceGroupsTaggingAPI();
resourcegroupstaggingapi.getResources(params, function (err, data) {
    if (err) {
        console.log(err, err.stack);
    }
    else {
        console.log(data);
        console.log(data.ResourceTagMappingList[0].Tags);
    }
});