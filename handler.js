'use strict';

const querystring = require('querystring');

module.exports.buildDiagram = (event, context, callback) => {
    var diagramBuilder = require('./src/diagramBuilder/index');
    var storeImage = require('./src/storeImage/store');

    var queryData = querystring.parse(event.body);

    var response = {
        statusCode: 200
    };

    response.body = "I'll start building a diagram for you. " + JSON.stringify(queryData);

    callback(null, response);
    
    // diagramBuilder.build('us-east-1', 'PROD_SERVER', requestedResource, function (result) {
    //     result = result ? result : {};
    // });

    storeImage(__dirname + "/resources/mustache/AWS_CLOUD.png")
        .then(function(uri) {
        });
};
