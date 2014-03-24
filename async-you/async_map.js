var async = require('async')
var http = require('http')

async.map([process.argv[2], process.argv[3]], function(item, done){
    http.get(item, function(res){
        var con = '';
        res.on('data', function(chunk){
            con += chunk.toString();
        })
        res.on('end', function(){
            return done(null, con);
        })
    }).on('error', function(e){
            return done(e);
    })
 
}, function(err, results){
    if(err)
        console.error(err);
    console.log(results)

})
