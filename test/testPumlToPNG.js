let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let pumlToPNG = require('../src/diagramBuilder/pumlToPNG');
var fs = require('fs');

chai.use(require('chai-fs'));

const outputFile = __dirname + "/.storage/diagram.png";

describe('testPumlToPNG()', function () {
    if (!process.env.CI) {
        this.timeout(10000);

        before(function () {
            if (fs.existsSync(outputFile)) {
                fs.unlinkSync(outputFile);
            }
        });

        it('should create a png file in the location defined', function (done, x) {
            pumlToPNG(__dirname + "/.storage/diagram.puml")
                .then(function () {
                    expect(outputFile).to.be.a.file();
                    done();
                })
                .catch(function (err) {
                    done(err);
                });
            //
        });
    }
});