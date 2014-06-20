var http = require('http')
var fs = require('fs')
var path = require('path')
var pages = [
    {route: '', output: 'Woohoo!'},
    {route: 'about', output: 'A simple routing with Node example'},
    {route: 'another page', output: function() {return 'Here\'s ' + this.route}},
];

//content type
var mimeTypes = {
    '.js' : 'text/javascript',
    '.html': 'text/html',
    '.css' : 'text/css'
};

http.createServer(function(req, res){

    var lookup = path.basename(decodeURI(req.url)) || "index.html"

    //pages.forEach(function(page){
        //if(page.route === router) {
            //res.writeHead(200, {'Content-Type': 'text/html'})  
            //res.end((typeof page.output === "function")? page.output(): page.route)
        //}
    //})
    var f = 'content/'+lookup
    fs.exists(f, function(exists){
        console.log(exists ? lookup  + " is there": lookup + " doesn't exist")

        if(exists) {
            fs.readFile(f, function(err, data){
                if(err) {
                    res.writeHead(500)
                    res.end('server error')
                    return 
                }

                var header = {"Content-Type": mimeTypes[path.extname(lookup)]}
            
                res.writeHead(200, header)
                res.end(data)
            })
        
            return 
        }

        res.writeHead(404)
        res.end()

    })

    //if(!res.finished) {
        //res.writeHead(404)  
        //res.end("No pages")
    //}
}).listen(3333)
