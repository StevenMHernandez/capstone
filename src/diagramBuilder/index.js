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
    var pumlToPNG = require('./pumlToPNG');

    console.log("Loading data from AWS");

    Promise.all([loadFromAWS(region, tag, "ELB"), loadFromAWS(region, tag, "EC2"), loadFromAWS(region, tag, "RDS")])
        .then(function (allData) {
            var mappedData = mapData(allData);

            buildUML('/../../storage/diagram.puml', mappedData);

            return pumlToPNG('/tmp/diagram.puml');
        })
        .then(function () {
            callback("test");
        })
        .catch(function (err) {
            console.log(err);
        });
};