/**
 * Run this index.js to manually test sending message.
 */
var sendMessage = require('./sendMessage');
var sendImageMessage = require('./sendImageMessage');

// Locally, you can change this
var username = ". . .";

sendMessage(username, "Hello world");
sendImageMessage(username, "https://s3.amazonaws.com/zeebo/YmY1NjYxNA.png");
