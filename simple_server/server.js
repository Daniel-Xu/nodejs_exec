var http = require("http");

http.createServer(function(request, response){
  console.log("request received");
  response.writeHead(200, {"Content-Type": "text/plain"}) ;
  response.write("hello");
  response.end();
}).listen(9090);
console.log("server started");
