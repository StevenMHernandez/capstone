/**
 * Run this index.js to manually test sending message.
 */
var sendMessage = require('./sendMessage');
var sendImageMessage = require('./sendImageMessage');

// Locally, you can change this
var username = ". . .";

sendMessage(username, "Hello world");
sendImageMessage(username, __dirname + "/../../resources/mustache/AWS_CLOUD.png");