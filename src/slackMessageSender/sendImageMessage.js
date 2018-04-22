let SlackBot = require('slackbots');

/**
 * Send the image at `imagePath` to channel id `channelId`
 *
 * @param username
 * @param imageData
 */
module.exports = function (username, imageData) {
    return new Promise(function (resolve, reject) {
        // DO NOT STORE THE CHATBOT TOKEN IN GITHUB!
        // This is passed in when you run
        // `CHATBOT_TOKEN=XXXX node src/slackMessageSender/index.js`
        let chatbotToken = process.env.CHATBOT_TOKEN;

        //@See https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:293246570391:applications~plantuml-render
        let plantUmlServerUrl = process.env.PLANTUML_SERVER_URL;

        let bot = new SlackBot({
            token: chatbotToken,
            name: 'Zeebo'
        });

        bot.postMessageToUser(username, '', {
            "attachments": [
                {
                    "fallback": "AWS Architecture Diagram",
                    "author_name": "Zeebo Chatbot",
                    "title": "Alright, heres that AWS Architecture Diagram",
                    "title_link": "https://github.com/StevenMHernandez/capstone",
                    "image_url": plantUmlServerUrl + imageData,
                    "thumb_url": plantUmlServerUrl + imageData
                }
            ]
        }).then(function (data) {
            resolve(data)
        });
    });
};