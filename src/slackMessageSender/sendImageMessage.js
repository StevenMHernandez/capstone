let SlackBot = require('slackbots');

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
    let chatbotToken = process.env.CHATBOT_TOKEN;

    let bot = new SlackBot({
        token: chatbotToken,
        name: 'Zeebo'
    });

    bot.postMessageToUser(username, '', {
        "attachments": [
            {
                "fallback": "AWS Architecture Diagram",
                "author_name": "Zeebo Chatbot",
                "title": "AWS Architecture Diagram",
                "title_link": "https://github.com/StevenMHernandez/capstone",
                "image_url": imagePath,
                "thumb_url": imagePath
            }
        ]
    }).then(function (data) {
        //
    });
};