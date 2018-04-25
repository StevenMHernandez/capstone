const ELB_INDEX = 0;
const EC2_INDEX = 1;
const RDS_INDEX = 2;

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
    connections = [];

    data[ELB_INDEX].forEach(function (loadbalancer, i) {
        loadbalancer.Instances.forEach(function (instance) {
            connections.push({
                'src': loadbalancer.LoadBalancerName.hashCode(),
                'dest': instance.InstanceId.hashCode(),
            });
        });
    });

    return {
        'subnets': [{
            'subnet_name': 'subnet',
            'elb': data[ELB_INDEX].map(function (instance, i) {
                return {
                    'id': instance.LoadBalancerName.hashCode(),
                    'name': instance.LoadBalancerName,
                }
            }),
            'ec2': data[EC2_INDEX].map(function (instance, i) {
                return {
                    'id': instance.InstanceId.hashCode(),
                    'name': instance.PrivateIpAddress,
                }
            }),
            'rds': data[RDS_INDEX].map(function (instance, i) {
                return {
                    'id': instance.DbiResourceId.hashCode(),
                    'name': instance.DBInstanceIdentifier,
                }
            }),
            'connections': connections,
        }]
    }
};

// @See http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
String.prototype.hashCode = function () {
    let hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
};