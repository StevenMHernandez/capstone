/**
 * Controls logic for building the diagram.
 *
 * @param region
 * @param tag
 * @param callback
 */
module.exports.build = function (region, tag, callback) {
    var loadFromAWS = require('./loadFromAWS');
    var mapData = require('./mapData');
    var buildUML = require('./buildUML');
    var pumlToPDF = require('./pumlToPDF');

    console.log("Loading data from AWS");

    loadFromAWS(region, tag, function (data) {
        callback(data);
        var mappedData = mapData(data);

        buildUML(__dirname + '../storage/diagram.puml', mappedData);

        pumlToPDF(__dirname + '../storage/diagram.puml', __dirname + '../storage/diagram.pdf');

        console.log("Complete");
    });

};