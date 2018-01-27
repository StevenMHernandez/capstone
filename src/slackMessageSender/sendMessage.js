/**
 * Send message to the channel provided.
 *
 * @param username
 * @param message
 */
module.exports = function (username, message) {
    // DO NOT STORE THE CHATBOT TOKEN IN GITHUB!
    // This is passed in when you run
    // `CHATBOT_TOKEN=XXXX node src/slackMessageSender/index.js`
    var chatbotToken = process.env.CHATBOT_TOKEN;

    // TODO: send `message` to the channelId
    console.error("error: sendMessage() not implemented")
};