'use strict';

module.exports.buildDiagram = (event, context, callback) => {
  var diagramBuilder = require('./src/diagramBuilder/index');

  diagramBuilder.build('us-east-1', 'PROD_SERVER', function(result) {
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    callback(null, response);
  });
};
