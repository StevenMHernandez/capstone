function listASV() {
    var AWS = require('aws-sdk');
    AWS.config.update({region: 'us-east-1'});
    var ec2 = new AWS.EC2();
    var params = {};
    var ec2Raw = [];

    return new Promise(function (resolve, reject) {
        ec2.describeTags(params, function (err, data) {
            ec2Raw = data;
            var allArr = [];
            var unique = [];
            var temp = false;
            var allASV = "";
            for (var i = 0; i < ec2Raw.Tags.length; i++) {
                var ec2val = ec2Raw.Tags[i].Value;
                if (ec2Raw.Tags[i].Key == "ASV") {
                    allArr.push(ec2val);
                }
            }

            allArr.sort();

            for(var a = 0; a<allArr.length; a++){
                if(a == allArr.length){
                    break;
                }
                else if(allArr[a] == allArr[a+1]){
                    continue;
                }
                else{
                    unique.push(allArr[a]);
                }
            }
            //return string
            allASV = "All Servers: " + unique.toString() + "\r\n";
            resolve(allASV);
        });
    });
}
module.exports = listASV;