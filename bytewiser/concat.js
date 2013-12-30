var buffer = new Buffer('')

process.stdin.on('data', function(data){
    buffer = Buffer.concat([buffer, data])
}).on('end', function(){
    console.log(buffer)
})
