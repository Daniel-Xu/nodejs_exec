//construct a promise
var q = require('q')
var defer = q.defer()


//
function attachTitle(){
    var a = Array.prototype.slice.call(arguments)
    a.unshift('DR. ')
    return a.join('')
}


defer.promise.then(attachTitle).then(console.log)
//defer.promise.then(function(val){
    //return "DR." + val
//}).then(console.log)
defer.resolve('MANHATTAN')
