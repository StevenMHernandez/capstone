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
module.exports = function (region, tag, requestedResource, callback) {
    var params = {};
    var ec2 = new AWS.EC2();

            ec2.describeTags(params, function (err, data) {
                // console.log(data.Tags[0]);
                console.log(data.Tags[0]);
                return(err,data);

                });
}