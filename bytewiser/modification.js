var tr = require('through')
process.stdin.pipe(tr(function write(buf){
    for (var i=0; i < buf.length; i++) {
        if (buf[i] === 46)
            buf.write("!", i)
    };
    console.log(buf)
}))
