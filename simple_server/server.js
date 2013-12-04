var http = require("http");
var url = require("url");

var start = function(route, handle){
  http.createServer(function(request, response){
    //path dispatch
    var pathname = url.parse(request.url).pathname;
    console.log("request for "+pathname+" received");
    route(pathname, handle);
    response.writeHead(200, {"Content-Type": "text/plain"}) ;

    response.write("hello");
    response.end();

  }).listen(9090);
  console.log("server started");
}

//module
//exports 
exports.start = start;
