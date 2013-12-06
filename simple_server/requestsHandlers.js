var exec = require("child_process").exec;
var querystring = require("querystring");
var formidable = require("formidable");
var fs = require("fs");

var start = function(response, request){
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
    '<form action="/upload" enctype="multipart/form-data" method="post" >'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="upload file">'+
    '</form>'+
    '</body>'+
    '</html>';
  response.writeHead(200, {"content-type":'text/html'});
  response.write(body);
  response.end();
}

var upload = function(response, request){
  console.log("Request handler 'upload' was called");

  var form = new formidable.IncomingForm();
  console.log("about to parse");

  form.parse(request, function(error, fields, files){
    console.log("parsing done");
    console.log(files);

    fs.rename(files.upload.path, "./tmp/1.png", function(err) {
      if (err) {
        fs.unlink("./tmp/1.png");
        fs.Request(files.file.path, "./tmp/1.png");
      } 
    });

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    //response.write("hello world");
    response.end(); 
  });

}

var show = function(response, request){
  console.log("show was called");

  fs.readFile("./tmp/1.png", "binary", function(err, file){
    if(err) {
      response.writeHead(500, {"content-type": "text/plain"}) ;
      response.write(err+'\n');
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      //binary is encoding, option
      response.write(file, "binary");
      response.end();
    }
  });
}



exports.start = start;
exports.upload = upload;
exports.show = show;
