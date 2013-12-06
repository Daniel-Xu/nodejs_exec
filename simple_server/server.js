var http = require("http");
var url = require("url");

var start = function(route, handle){
  http.createServer(function(request, response){
    //path dispatch
    var pathname = url.parse(request.url).pathname;
    console.log("request for "+pathname+" received");

    //this will cause a bug in formidable's parsing
    //request.setEncoding("utf8");
    //var postData = "";
    //add listener
    //request.addListener("data", function(postDataChunk){
      //postData += postDataChunk; 
    
      //console.log("####data chunk coming:### "+ postDataChunk);
    //});

    //request.addListener("end", function(){
    route(pathname, handle, response, request);
    //});


  }).listen(9090);
  console.log("server started");
}

//module
//exports 
exports.start = start;
