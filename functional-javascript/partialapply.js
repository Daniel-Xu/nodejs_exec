var slice = Array.prototype.slice

function logger(namespace) {
    return function(){
        var args = slice.apply(arguments)
        console.log(namespace+ ' '+ args.join(' '))
    }
    
}

module.exports = logger
