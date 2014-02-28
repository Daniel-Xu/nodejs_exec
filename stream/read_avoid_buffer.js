var Readable = require("stream").Readable;
var rs = new  Readable;

var c = 97-1;
//var c = 97;


rs._read = function(){
    if(c > 'z'.charCodeAt(0)){
        //rs.push("\n");
        return rs.push (null);
    }

    setTimeout(function(){
        rs.push(String.fromCharCode(++c));
    }, 100);
}



/*
rs._read = function(){
    rs.push(String.fromCharCode(c++));
    if(c> 'z'.charCodeAt(0)){
        rs.push("\n");
        rs.push(null);
    
    }
}
*/


process.on("exit", function(){
    console.error("\n_read() called " + (c-97) + " times" );
})

rs.pipe(process.stdout)
process.stdout.on("error", process.exit)



