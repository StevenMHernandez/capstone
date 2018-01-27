/**
 * Run this index.js to manually test storing an image.
 */
let storeImage = require('./store');

storeImage(__dirname + "/../../resources/mustache/AWS_CLOUD.png").then(function(uri) {
    console.log("stored at", uri);
});
