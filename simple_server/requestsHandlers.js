var exec = require("child_process").exec;
var querystring = require("querystring");
var start = function(response){
  console.log("Request handler 'start' was called");
  
  //exec("find /", {timeout: 10000, maxBuffer: 20000*1024}, 
      //function(error, stdout, stderr){
        //response.writeHead(200, {"Content-Type":"text/plain"});
        //response.write(stdout);
        //response.end();
      //});
  var body = "<html>" +
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post" >'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="submit text">'+
    '</form>'+
    '</body>'+
    '</html>';
  response.writeHead(200, {"content-type":'text/html'});
  response.write(body);
  response.end();
}

var upload = function(response, postData){
  console.log("Request handler 'upload' was called");
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write(querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;
