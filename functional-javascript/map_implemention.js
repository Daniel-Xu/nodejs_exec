module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(a, b){
        a.push(fn(b))
        return a
    }, [])
}
