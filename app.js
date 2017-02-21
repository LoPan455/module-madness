// var randomNumber = require('./modules/module-one.js');
// console.log(randomNumber(100, 1000000));
//
// var convertValue = require('./modules/module-two.js');
// console.log(convertValue(randomNumber(100, 100000)));

var projectOutput = require('./modules/module-three.js');
console.log(projectOutput);
 var something = '67';


var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200);
    res.write('' + projectOutput.tapas + projectOutput.sushi);
    res.end();
}).listen(5000);
