var server = require("http").createServer();
var domain = require("domain")

server.listen(8080)

server.on("request", function(req, res){

    var d = domain.create()
    d.add(req)
    d.add(res)

    d.on("error", function(err){
        res.writeHead(500)
        res.end(err.message)
    }) 

    d.run(function(){
        res.emit("error", new Error("help")) 
    })

})

