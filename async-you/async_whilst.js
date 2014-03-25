var async = require('async')
var http = require('http')

var url = process.argv[2]
var str
var cn = 0

async.whilst(function(){
    return !/meerkat/.test(str)
}, function(cb){
    http.get(url, function(res){
        ++cn
        var con = ''
        res.on('data', function(chunk){
            con += chunk.toString()
        })

        res.on('end', function(){
            str = con
            cb()
        })
    }).on('error', function(e){
        cb(e)
    })


}, function(err){
    if(err)
        return console.error(err)
    console.log(cn)
})
