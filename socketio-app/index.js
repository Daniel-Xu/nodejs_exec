var sio = require('socket.io');
var express = require('express');
var app = express();

app.use(express.static('public'));
var server = app.listen(5432, function() {

  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
var io = sio(server);
io.on('connection', function(socket) {
  console.log('new socket connection...');

  socket.on('disconnect', function() {
    console.log('connection disconnected');
  });
});




