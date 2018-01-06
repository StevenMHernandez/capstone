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
module.exports = function (filename, data) {
    // TODO: we need to find a way to load this file as a string.
    // load_file is not the correct function.
    let mustacheString = load_file(__dirname + '../../../resources/mustache/AWS_CLOUD.mustache');

    // TODO: We need to install https://github.com/janl/mustache.js/
    // nodejs usage see: https://stackoverflow.com/a/8106610
    let renderpumlString = Mustache.render(mustacheString, data);

    // TODO: We then need to save the string to a file at the file location specified in filename
    // file_save is not the correct function.
    file_save(filename, renderpumlString);
};