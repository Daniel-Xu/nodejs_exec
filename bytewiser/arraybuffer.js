var buffer = new ArrayBuffer(4)
var a = new Uint32Array(buffer)


a[0] = process.argv[2]
var b = new Uint16Array(buffer)

console.log(JSON.stringify(b))
