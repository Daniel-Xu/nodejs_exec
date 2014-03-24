var async = require("async"),
    fs = require("fs"), 
    http = require("http")

async.waterfall([
    function firstOne(cb){
        var filename = process.argv[2]
        
        fs.readFile(filename, function(err, content){
            if(err) cb(err)
            cb(null, content.toString())
        })    
    }, 


    function secondOne(url, cb){
        http.get(url, function(res){
            var con = ''
            res.on('data', function(content){
                con += content.toString()
            })
             
            res.on("end", function(){
                cb(null, con)
            })
        }).on("error", function(err){
            cb(err)
        })
    }

], function resultOne(err, result){
    if(err)
        return console.error(err)

    console.log(result)

})
