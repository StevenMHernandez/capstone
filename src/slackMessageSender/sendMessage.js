let SlackBot = require('slackbots');

/**
 * Send message to the username provided.
 *
 * @param username
 * @param message
 */
module.exports = function (username, message) {
    // DO NOT STORE THE CHATBOT TOKEN IN GITHUB!
    // This is passed in when you run
    // `CHATBOT_TOKEN=XXXX node src/slackMessageSender/index.js`
    let chatbotToken = process.env.CHATBOT_TOKEN;

    let bot = new SlackBot({
        token: chatbotToken,
        name: 'Zeebo'
    });

    bot.postMessageToUser(username, message).then(function (data) {
        process.exit();
    });
};