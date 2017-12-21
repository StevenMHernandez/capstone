var diagramBuilder = require('./diagramBuilder/index');

/*
 * For now, we will only build our diagram here.
 *
 * In the future, this file will be used for more things including:
 * sending data to slack, receiving data from slack, etc.
 */

diagramBuilder.build('us-east-1', 'PROD_SERVER', 'EC2', function(results) {
    console.log(results);
});

diagramBuilder.build('us-east-1', 'PROD_SERVER', 'RDS', function(results) {
    console.log(results);
});

diagramBuilder.build('us-east-1', 'PROD_SERVER', 'RLB', function(results) {
    console.log(results);
});

diagramBuilder.build('us-east-1', 'PROD_SERVER', 'other', function(results) {
    console.log(results);
});