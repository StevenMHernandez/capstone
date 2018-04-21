/**
 * Controls logic for building the diagram.
 *
 * @param region
 * @param tag
 * @param callback
 */
module.exports.build = function (region, tag, callback) {
    var loadFromAWS = require('./loadFromAWS');
    var loadEC2 = require('./loadEC2');
    var loadELB = require('./loadELB');
    var loadRDS = require('./loadRDS');
    var mapData = require('./mapData');
    var buildUML = require('./buildUML');
    var pumlToPNG = require('./pumlToPNG');

    console.log("Loading data from AWS");

    Promise.all([loadELB(region, tag, "ELB"), loadEC2(region, tag), loadRDS(region, tag, "RDS")])
        .then(function (allData) {
            var mappedData = mapData(allData);

             buildUML('/tmp/diagram.puml', mappedData);

            return pumlToPNG('/tmp/diagram.puml');
        })
        .then(function () {
            callback("test");
        })
        .catch(function (err) {
            console.log(err);
        });
};
