var async = require('async');
var http = require('http');

async.each([process.argv[2], process.argv[3]], function(item, done){
    http.get(item, function(res){
        res.on('data', function(data){
        });
        res.on('end', function(){
            return done();
        });
    }).on('error', function(e){
        return done(e);
    })
}, function(err){
    console.log(err);
})

