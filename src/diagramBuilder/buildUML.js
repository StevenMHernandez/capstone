/**
 * Once we've mapped our data in `mapData`
 * we can use this mapped data to build
 * our PlantUML file here.
 *
 * We may want to have separate functions
 * or files to handle the each different element
 * depending on how we structure the code.
 *
 * @param filename
 * @param data
 * @returns {*}
 */
var fs = require('fs');
var Mustache = require('mustache');
let mustacheString = '';


    module.exports = function (filename, data) {
      var file = fs.readFileSync('../resources/mustache/AWS_CLOUD.mustache');
      mustacheString = file.toString();
      let renderpumlString = Mustache.render(mustacheString, data);
      fs.writeFileSync(filename, renderpumlString);
};
