var loadFromAWS = require('./loadFromAWS');
var mapData = require('./mapData');
var buildUML = require('./buildUML');

console.log("Loading data from AWS");

loadFromAWS('us-west-2', 'ASV_CHATBOT', function (data) {
    var mappedData = mapData(data);

    buildUML(mappedData);

    console.log("Complete");
});
