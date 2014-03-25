var async = require('async');
var http = require('http');
var host = process.argv[2]
var port = process.argv[3]
var url = 'http://' +  host + ':' + port

async.series([
    function addUsers(done) {
        //done is the series inject callback
        function _addUser(id, cb) {
            var opts = {
                hostname: process.argv[2], 
                port: process.argv[3], 
                method: "POST", 
                path: "/users/create" 
            }

            var content = JSON.stringify({
                user_id: id+1
            })

            var req = http.request(opts, function(res){
                var con = '';
                res.on('data', function(){
                    //we don't care
                })

                res.on('end', function(){
                    cb();
                })
            });


            req.write(content)
            req.end()
            req.on('error', function(e){
                cb(e);
            })

        }

        async.times(5, function(id, next){
            _addUser(id, function(err){
                next(err)
            })

        }, function(err){
            if(err)
                done(err)
            done(null, "saved")
        })
    },


    function getUsers(done) {
        http.get(url+'/users', function(res){
            var con = '';
            res.on('data', function(chunk){
                con += chunk.toString();
            })
            res.on('end', function(){
                done(null, con);
            })
        })
    }


], function(err, results){
    if(err)
        console.error(err)
    console.log(results)

})
