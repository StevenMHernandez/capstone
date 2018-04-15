'use strict';

const querystring = require('querystring');

module.exports.listAssets = (event, context, callback) => {
    let queryData = querystring.parse(event.body);

    if (queryData.text !== "") {
        callback(null, {
            statusCode: 200,
            body: "TODO: handle " + queryData.text,
        });
    } else {
        callback(null, {
            statusCode: 200,
            body: "Make sure to select an ASV tag",
        });
    }
};
