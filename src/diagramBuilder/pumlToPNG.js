/**
 * Convert the plantUML file to PNG.
 *
 * @param pumlFilename
 */
module.exports = function (pumlFilename) {
    return new Promise(function (resolve, reject) {
        const {spawn} = require('child_process');
        const plantuml = spawn('java', ['-jar', __dirname + '/../../vendor/plantuml.jar', pumlFilename]);

        plantuml.stdout.on('data', (data) => {
            console.log(`plantuml stdout: ${data}`);
        });

        plantuml.stderr.on('data', (data) => {
            console.log(`plantuml stderr: ${data}`);
        });

        plantuml.on('close', (code) => {
            console.log("plantuml created");
            resolve();
        });
    });
};