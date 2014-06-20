var http = require('http')
var path = require('path')
var pages = [
    {route: '', output: 'Woohoo!'},
    {route: 'about', output: 'A simple routing with Node example'},
    {route: 'another page', output: function() {return 'Here\'s ' + this.route}},
];

http.createServer(function(req, res){

    var router = path.basename(decodeURI(req.url))

    pages.forEach(function(page){
        if(page.route === router) {
            res.writeHead(200, {'Content-Type': 'text/html'})  
            res.end((typeof page.output === "function")? page.output(): page.route)
        }
    })
    
    if(!res.finished) {
        res.writeHead(404)  
        res.end("No pages")
    }
}).listen(3333)
