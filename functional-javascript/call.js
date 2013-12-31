//this is my code, I use reduce to iterate 
function duckCount() {
    return Array.prototype.slice.call(arguments).reduce(function(a, b){
        if(Object.prototype.hasOwnProperty.call(b, 'quack')) 
            ++a;

        return a
    }, 0)
}


//this is standard answer, it use filter to change the array and cal the number of element, decent!
function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function(ele){
        return Object.prototype.hasOwnProperty.call(ele, 'quack')
    }).length
}

module.exports = duckCount

