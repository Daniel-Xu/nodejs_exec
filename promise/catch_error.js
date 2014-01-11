var q = require('q') 

function parsePromise(data){
    var defer = q.defer()
    var res

    try {
        res = JSON.parse(data)
    } catch(e) {
        defer.reject(e) 
    }
    defer.resolve(res)

    return defer.promise
}


parsePromise(process.argv[2]).then(null, console.log)
