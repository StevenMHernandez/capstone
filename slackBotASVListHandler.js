'use strict';

const listASV = require('./src/listASV/index');

module.exports.listASV = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: listASV(),
    });
};