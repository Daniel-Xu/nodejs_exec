var async = require('async')
var http = require('http')

var url = process.argv[2]

async.reduce(['one', 'two', 'three'], 0, function highOderFun(memo, item, callback){
    //var opts = {
        //hostname: url, 
        ////path: "?number="+item
    //}

    http.get(url+"?number="+item, function getRespond(res){
        var num = "";
        res.on('data', function(chunk){
            num += chunk.toString()
        })
        res.on('end', function(){
            
            callback(null, memo+ +num)
        })
    }).on('error', function(e){
        callback(e)
    })

}, function result(err, result){
    if(err)
        return console.error(err)
    console.log(result)
})


