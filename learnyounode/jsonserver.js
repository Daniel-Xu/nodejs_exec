var http = require("http")
var url = require("url")

function isoTime(date){
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}

http.createServer(function(req, res){
    var obj = url.parse(req.url, true)
    var date = new Date(obj.query.iso)
    var time


    if(obj.pathname == "/api/parsetime") {
        time = isoTime(date)
    } else if (obj.pathname == "/api/unixtime") {
        time = {unixtime: date.getTime()}
    }

    if(time){
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(time))
    } else {
        res.writeHead(404) 
        res.end()
    }


}).listen(+process.argv[2])
