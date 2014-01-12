var q = require('q')

var pOne = q.defer(), pTwo = q.defer()


function all(pOne, pTwo) {
    var pInter = q.defer() 
    var count = 0
    var v1, v2

    pOne.then(function(result){
        v1 = result
        ++count

        if(count === 2) {
            pInter.resolve([v1, v2])
        }
    }).then(null, pInter.reject)
    .done()

    pTwo.then(function(result){
        v2 = result
        ++count

        if(count === 2) {
            pInter.resolve([v1, v2])
        }
    }).then(null, pInter.reject)
    .done()

    return pInter.promise
}

all(pOne.promise, pTwo.promise).then(console.log).done()

setTimeout(function(){
    pTwo.resolve("FTW")
    pOne.resolve("PROMISES")
}, 2000)
