var http = require("http");
var myStuff = require("./request-handler");

var port = process.env.PORT || 8080;
var server = http.createServer(myStuff.handleRequest);

server.listen(port);

