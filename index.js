var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var ip = require('ip');

var port = 7000

io.on('connection', function (socket) {
  socket.on('message', function (data) {
    socket.emit('message', data);
    socket.broadcast.emit('message', data);
  });
});

server.listen(port);

console.log(
  '\n' +
  'Server is running\n' +
  'In this machine: http://localhost:' + port + '\n' +
  'In local network: http://' + ip.address() + ':' + port + '\n' +
  'To stop server, press Ctrl+C\n'

)