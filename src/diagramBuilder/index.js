/**
 * Controls logic for building the diagram.
 *
 * @param pumlFilename
 * @param Filename
 */
module.exports.build = function (region, tag) {
    var loadFromAWS = require('./loadFromAWS');
    var mapData = require('./mapData');
    var buildUML = require('./buildUML');
    var pumlToPDF = require('./pumlToPDF');

    console.log("Loading data from AWS");

    loadFromAWS(region, tag, function (data) {
        var mappedData = mapData(data);

        buildUML(__dirname + '../storage/diagram.puml', mappedData);

        pumlToPDF(__dirname + '../storage/diagram.puml', __dirname + '../storage/diagram.pdf');

        console.log("Complete");
    });

};