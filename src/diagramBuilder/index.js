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

    Promise.all([loadFromAWS(region, tag, "ELB"), loadFromAWS(region, tag, "EC2"), loadFromAWS(region, tag, "RDS")])
        .then(function (allData) {
            callback(allData);

            var mappedData = mapData(allData);

            buildUML(__dirname + '../storage/diagram.puml', mappedData);

            pumlToPDF(__dirname + '../storage/diagram.puml', __dirname + '../storage/diagram.pdf');

        })
        .catch(function (err) {
            console.log(err);
        });
};