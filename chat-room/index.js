var net = require('net');
var colors = require('colors');

var counts = 0
  , users = {};

net.createServer(function(socket) {
  socket.setEncoding('utf8');
  console.log('new connection'.rainbow);
  socket.write(
    '\n > welcome to chat room '
    + '\n > ' + counts + ' other people are connected'
    + '\n > write your name to start: '
  );

  var userConnected;
  socket.on('data', function(data) {
    data = data.replace('\r\n', '');

    if (userConnected) {
      // write message
      for (var connectedUser in users) {
        if (users[connectedUser] !== socket) {
          users[connectedUser].write(data + '\n');
        }
      }

    } else {
      // register user
      userConnected = data;
      users[data] = socket;
      for(var connectedUser in users) {
        users[connectedUser].write('welcome ' + data + 'joins the room\n'.yellow);
      }
    }

  });
  socket.on('close', function() {
    counts--;
    delete users[userConnected];
  });
  counts++;
}).listen(3000, function() {
  console.log('server listening on 3000'.green);
});
