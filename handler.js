'use strict';

const querystring = require('querystring');

module.exports.buildDiagram = (event, context, callback) => {
    var diagramBuilder = require('./src/diagramBuilder/index');

    var queryData = querystring.parse(event.body);
    var requestedResource = queryData.text.split(" ")[1];

    diagramBuilder.build('us-east-1', 'PROD_SERVER', requestedResource, function (result) {
        result = result ? result : {};

        var response = {
            statusCode: 200
        };
        if (requestedResource) {
            response.body = "Here is some data about " + requestedResource + ":\n\n" + JSON.stringify(result)
        } else {
            response.body = "Here is some data about your resources:\n\n" + JSON.stringify(result)
        }

        callback(null, response);
    });
};
