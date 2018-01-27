/**
 * Run this index.js to manually test sending message.
 */
var sendMessage = require('./sendMessage');
var sendImageMessage = require('./sendImageMessage');

// Locally, you can change this
var channelID = ". . .";

sendMessage(channelID, "Hello world");
sendImageMessage(channelID, __dirname + "/../../resources/mustache/AWS_CLOUD.png");