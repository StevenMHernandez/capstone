function listASV() {
    var AWS = require('aws-sdk');
    AWS.config.update({region: 'us-east-1'});
    var ec2 = new AWS.EC2();
    var elb = new AWS.ELB();
    var rds = new AWS.RDS();
    var params = {};
    var ec2Raw = [];
    var elbRaw = [];
    var rdsRaw = [];
    var myec2promise = new Promise(function (resolve, reject) {
    });
    var myrdspromise = new Promise(function (resolve, reject) {
    });

    return new Promise(function (resolve, reject) {
        ec2.describeTags(params, function (err, data) {
            ec2Raw = data;
            // console.log(ec2Raw.Tags);
            var allASV = "EC2 Servers: ";
            for (var i = 0; i < ec2Raw.Tags.length; i++) {
                var ec2var = ec2Raw.Tags[i].Value;
                if (ec2Raw.Tags[i].Key == "ASV") {
                    allASV += ec2var + ", ";
                }
            }
            allASV = allASV.substr(0, allASV.length - 2);

            resolve(allASV);
        });
    });
}
module.exports = listASV;