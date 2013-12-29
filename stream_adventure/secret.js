var tar = require('tar')
var parser = tar.Parse()
var crypto = require('crypto')
var zlib = require('zlib')
var tr = require('through')


parser.on("entry", function(e){
    if(e.type === "File") {
        var s = e.pipe(crypto.createHash('md5', {encoding: 'hex'})).pipe(tr(function(buf){
            this.queue(buf.toString() + " " + e.path + '\n')
        })).pipe(process.stdout)
    }
})

process.stdin.pipe(crypto.createDecipher(process.argv[2], process.argv[3])).pipe(zlib.createGunzip()).pipe(parser)
