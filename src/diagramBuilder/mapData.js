/**
 * After we load raw data from AWS,
 * we need to map this data to a form which
 * can be used to build our UML diagram.
 *
 * For example, we might start out with a
 * flat array of resources from AWS
 * which we then need to convert into a tree.
 *
 * @param data
 * @returns {*}
 */
module.exports = function (data) {
    console.log(data);
    return data
};