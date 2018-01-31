'use strict';

const querystring = require('querystring');
const AWS = require('aws-sdk');
const sns = new AWS.SNS();

module.exports.buildDiagram = (event, context, callback) => {
    let queryData = querystring.parse(event.body);

    let response = {
        statusCode: 200,
        body: "I'll start building a diagram for you.",
    };

    let arnParts = context.invokedFunctionArn.split(":");

    let endpointArn = "arn:aws:sns:" + arnParts[3] + ":" + arnParts[4] + ":zeebo-queue-topic";

    let snsPayload = {
        default: queryData.user_name
    };

    console.log('sending push');
    sns.publish({
        Message: JSON.stringify(snsPayload),
        MessageStructure: 'json',
        TopicArn: endpointArn
    }, function (err, data) {
        if (err) {
            console.log(err.stack);
            return;
        }

        callback(null, response);
    });
};
