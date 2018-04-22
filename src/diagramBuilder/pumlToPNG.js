/**
 * Encode plantuml.
 *
 * @param pumlFilename
 * @param encode IF we are running on AWS Lambda, we don't actually run plantuml directly
 */
module.exports = function (pumlFilename, encode) {
    return new Promise(function (resolve, reject) {
        if (encode) {
            let fs = require('fs');
            let plantuml = require('node-plantuml');

            let fileContents = fs.readFileSync(pumlFilename).toString();
            plantuml.encode(fileContents, function (err, encoded) {
                resolve(encoded);
            });
        } else {
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
        }
    });
};