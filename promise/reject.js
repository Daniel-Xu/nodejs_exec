var q = require('q')
var defer = q.defer()

defer.promise.then(null, function(err){
    console.log(err)
})

setTimeout(function(){
    defer.reject("REJECTED!")
}, 300)
