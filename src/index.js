var diagramBuilder = require('./diagramBuilder/index');

/*
 * For now, we will only build our diagram here.
 *
 * In the future, this file will be used for more things including:
 * sending data to slack, receiving data from slack, etc.
 */
diagramBuilder.build('us-west-2', 'ASV_CHATBOT');