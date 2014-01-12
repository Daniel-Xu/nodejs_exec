var io = require('q-io/http')

io.read('http://localhost:1337').then(JSON.parse).then(console.log)
