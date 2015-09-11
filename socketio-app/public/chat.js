window.onload = function() {
  var socket = io();

  socket.on('connect', function() {
    socket.emit('join', prompt('please enter your name', 'helloworld'));
  })
  socket.on('notification', function(msg) {
    var li = document.createElement('li');
    li.className = 'announcement';
    li.innerHTML = msg;
    document.getElementById('messages').appendChild(li);
  });
  function addMsg(from, msg) {
    var li = document.createElement('li');
    li.className = 'msg';
    li.innerHTML = '<b>'+ from +'</b>: ' + msg;
    document.getElementById('messages').appendChild(li);
    return li;
  }


  var input = document.getElementById('content');
  document.getElementById('send').onclick = function() {
    var liTag = addMsg('me', input.value);
    socket.emit('text', input.value, function(date) {
    liTag.className = 'confirm';
    liTag.title = date;
  });
    input.value = '';
    return false;
  }

  socket.on('text', addMsg);
}



