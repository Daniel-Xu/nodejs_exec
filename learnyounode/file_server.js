var http = require("http")
var path = process.argv[3]
var fs = require("fs")

http.createServer(function(req, res){
    fs.createReadStream(path).pipe(res)
}).listen(+process.argv[2])
