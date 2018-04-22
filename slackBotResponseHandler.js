'use strict';

const diagramBuilder = require('./src/diagramBuilder/index');
const slackSendImageMessage = require('./src/slackMessageSender/sendImageMessage');

module.exports.buildDiagram = (event, context, callback) => {
    diagramBuilder.build('us-east-1', 'PROD_SERVER', function (result) {
        slackSendImageMessage(event.Records[0].Sns.Message, result)
            .then(function () {
                callback(null, {
                    statusCode: 200,
                    body: "complete"
                });
            });
    })
};
