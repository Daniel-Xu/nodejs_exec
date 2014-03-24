var async = require('async')
var http = require('http')

async.series({
    requestOne: function(done) {
        http.get(process.argv[2], function response(res){
            var con = '';
            res.on('data', function(chunk){
                con += chunk.toString()
            })
            res.on('end', function(){
                done(null, con);
            })
        })
    },

    requestTwo: function(done){
        http.get(process.argv[3], function response(res){
            var con = '';
            res.on('data', function(chunk){
                con += chunk.toString()
            })
            res.on('end', function(){
                done(null, con);
            })
        })
    }

}, function resultOne(err, result){
    if(err)
        return console.err(err);

    console.log(result)
})
