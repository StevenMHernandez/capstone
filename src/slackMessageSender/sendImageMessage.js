/**
 * Send the image at `imagePath` to channel id `channelId`
 *
 * @param username
 * @param imagePath
 */
module.exports = function (username, imagePath) {
    // DO NOT STORE THE CHATBOT TOKEN IN GITHUB!
    // This is passed in when you run 
    // `CHATBOT_TOKEN=XXXX node src/slackMessageSender/index.js`
    var chatbotToken = process.env.CHATBOT_TOKEN;

    // TODO: send the image at `imagePath`
    console.error("error: sendImageMessage() not implemented")
};