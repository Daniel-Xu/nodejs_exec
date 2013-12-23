var http = require("http")
var tr = require("through")

//at first, I didn't use else
//the function can not go through
var server = http.createServer(function(req, res){
    if (req.method === 'POST') 
        req.pipe(tr(write, end)).pipe(res)
    else
        res.end("send a post")
}).listen(process.argv[2])

function write(buf) {
    this.queue(buf.toString().toUpperCase())
}

function end() {
    this.queue(null)
}
