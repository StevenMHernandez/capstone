'use strict';

const diagramBuilder = require('./src/diagramBuilder/index');
const storeImage = require('./src/storeImage/store');
const slackSendImageMessage = require('./src/slackMessageSender/sendImageMessage');

module.exports.buildDiagram = (event, context, callback) => {
    diagramBuilder.build('us-east-1', 'PROD_SERVER', function (result) {
        storeImage(__dirname + "/resources/mustache/AWS_CLOUD.png")
            .then(function (uri) {
                return slackSendImageMessage(event.Records[0].Sns.Message, uri);
            })
            .then(function () {
                callback(null, {
                    statusCode: 200,
                    body: "complete"
                });
            });
    })
};
