'use strict';

// promise to retrieve list of ASVs as a string.
const listASV = require('./src/listASV/index');

module.exports.listASV = (event, context, callback) => {
    listASV()
        .then(function (response) {
            callback(null, {
                statusCode: 200,
                body: response,
            });
        })
        .catch(function (err) {
            console.log(err);
        });
};