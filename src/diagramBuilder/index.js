/**
 * Controls logic for building the diagram.
 *
 * @param region
 * @param tag
 * @param callback
 * @param production
 */
module.exports.build = function (region, tag, callback) {
    var loadEC2 = require('./loadEC2');
    var loadELB = require('./loadELB');
    var loadRDS = require('./loadRDS');
    var mapData = require('./mapData');
    var buildUML = require('./buildUML');
    var pumlToPNG = require('./pumlToPNG');

    console.log("Loading data from AWS");

    Promise.all([loadELB(region, tag, "ELB"), loadEC2(region, tag), loadRDS(region, tag, "RDS")])
        .then(function (allData) {
            let mappedData = mapData(allData);
            let path = process.env.PLANTUML_SERVER_URL ? '/tmp/diagram.puml' : __dirname + '/../../storage/diagram.puml';

             buildUML(path, mappedData);

            return pumlToPNG(path, process.env.PLANTUML_SERVER_URL);
        })
        .then(function (encoded) {
            callback(encoded);
        })
        .catch(function (err) {
            console.log(err);
        });
};
