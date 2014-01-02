//standar answer
module.exports = function(namespace) {
    return console.log.bind(console, namespace)
}

//my answer
//var slice = Array.prototype.slice
//module.exports = function(namespace) {
    //return function() {
        //var args = slice.bind(arguments)()
        ////console.log(args)
        //console.log(namespace+ " " + args.join(" ")) 
    //}

//}

