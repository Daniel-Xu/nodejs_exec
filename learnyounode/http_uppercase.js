var http = require("http")
var map = require("through2-map")

http.createServer(function(req, res){
    //here need to be POST, post can not pass
    if(req.method != 'POST') 
        return res.end('need post')

    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase() 
    })).pipe(res)
}).listen(+process.argv[2])
