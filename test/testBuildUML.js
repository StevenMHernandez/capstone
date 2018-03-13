let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let buildUML = require('../src/diagramBuilder/buildUML');

chai.use(require('chai-fs'));

let region = 'us-east-1';
let tag = 'PROD_SERVER';

describe('testBuildUML()', function () {
    describe('EC2', function () {
        it('should create a puml file in the location defined', function () {


            let object = {
                "subnets": [
                    {
                        ec2: [
                            {
                                'id': 'api1',
                                'name': 'Windows2016',
                            },
                            {
                                'id': 'api2',
                                'name': 'AmazonLinux',
                            },
                            {
                                'id': 'api3',
                                'name': 'RedHatService',
                            }
                        ],
                        rds: [
                            {
                                'id': 'db1',
                                'name': 'MySQL1',
                            },
                            {
                                'id': 'db2',
                                'name': 'MySQL1',
                            }
                        ],
                    },
                    {
                        ec2: [],
                        rds: [
                            {
                                'id': 'db3',
                                'name': 'MySQL3',
                            },
                            {
                                'id': 'db4',
                                'name': 'MySQL4',
                            }
                        ],
                    },
                    {
                        ec2: [
                            {
                                'id': 'api5',
                                'name': 'RedHatService',
                            }
                        ],
                        rds: [
                            {
                                'id': 'db5',
                                'name': 'MySQL5',
                            }
                        ],
                    },
                ]
            };

            buildUML(__dirname + "/.storage/ec2_file.puml", object);

            expect(__dirname + "/.storage/ec2_file.puml").to.be.a.file();


        });
    });
});