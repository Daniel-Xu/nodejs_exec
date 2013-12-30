

process.stdin.on('data', function(data){
    var a = new Uint8Array(data.length)
    for (var i=0; i < data.length; i++) {
        //console.log(data[i])
        a[i] = data[i]
    };

    console.log(JSON.stringify(a))
    //console.log(a)
})
