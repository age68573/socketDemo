// var fs = require('fs')
// // var https = require('https')
// // 如果不用 https 的話，要改成引用 http 函式庫
// var http = require('http')
// var socketio = require('socket.io')
// //https 的一些設定，如果不需要使用 ssl 加密連線的話，把內容註解掉就好
// var options = {
//     // key: fs.readFileSync('這個網域的 ssl key 位置'),
//     // cert: fs.readFileSync('這個網域的 ssl fullchain 位置')
// }
// //http & socket port
// var server = http.createServer(options);
// server.listen(4040)
// var io = socketio(server);
// console.log("Server socket 4040 , api 4000")
// //api port
// var app = require('express')();
// var port = 4000;
// app.listen(port, function () {
//     console.log('API listening on *:' + port);
// });
// //用 api 方式建立連線
// app.get('/api/messages', function (req, res) {
//     let messages = 'hellow world'
//     res.send(messages);
// })
// //用 socket 方式建立連線
// io.on('connection', function (socket) {
//     console.log('user connected')
// })
var time = require('./src/common/utils')
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http, {
  cors: {
    origin: ["https://localhost:8080", "http://192.168.1.96:8080"],
    allowedHeaders: ["my-custom-header"],
    methods: ["GET", "POST"],
    credentials: true,
  },
  allowEIO3: true
});

io.on('connection', function(socket) {
  console.log('success');
  socket.on('send', function(obj) {
    console.log(obj.msg);
    socket.broadcast.emit('other', {
      msgg: obj.msg,
      user: false,
      time: time.setNowTimes()
    });
    socket.emit('self', {
      msgg: obj.msg,
      user: true,
      time: time.setNowTimes()
    });
  });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
console.log('監聽3000port');
