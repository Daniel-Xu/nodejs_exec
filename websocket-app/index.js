var express = require('express');
var wsio = require('websocket.io'); 

var app = express();

app.use(express.static('public'));


// app.get('/', function(req, res) {
  // res.send('hello world');
// });

var server = app.listen(4321, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

var ws = wsio.attach(server);

ws.on('connection', function(socket) {
  socket.on('message', function(msg) {
    console.log('got your ' + msg);
    socket.send('pong');
  });

});
