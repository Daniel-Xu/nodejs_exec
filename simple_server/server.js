var http = require("http");
var url = require("url");

var start = function(route, handle){
  http.createServer(function(request, response){
    //path dispatch
    var pathname = url.parse(request.url).pathname;
    console.log("request for "+pathname+" received");
    route(pathname, handle, response);
  }).listen(9090);
  console.log("server started");
}

//module
//exports 
exports.start = start;
