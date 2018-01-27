/**
 * Store an image on AWS S3 and return the url.
 *
 * @param imageLocation
 * @return string
 */
module.exports = function (imageLocation) {
    return new Promise(function (resolve, reject) {
        // Load the SDK for JavaScript
        var AWS = require('aws-sdk');
        var fs = require('fs');
        var uuid = require("uuid");
        var id = uuid.v4();

        AWS.config.update({
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_KEY
        });
        
        fs.readFile(imageLocation, function (err, data) {
            if (err) {
                throw err;
            }

            var base64data = new Buffer(data, 'binary');

            var newFileName = id + ".png";

            var s3 = new AWS.S3();
            s3.putObject({
                Bucket: 'zeebo',
                Key: newFileName,
                Body: base64data,
                ACL: 'public-read'
            }, function (resp) {
                console.log(arguments);
                console.log('Successfully uploaded package.');
            });

            resolve("https://s3.amazonaws.com/zeebo/" + newFileName);
        });
    });
};