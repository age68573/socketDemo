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

allMsg = [];
userName = [];
io.on('connection', function(socket) {
  console.log('success');
  socket.emit("allMessage", allMsg);
  socket.on('sendNickName', (nickName) => {

    let isSameName = userName.find((item) => {
      return item.name === nickName.name
    })
    if (isSameName) { //有同名
      // socket.emit("haveSameName") // 也同名就發射事件
      socket.emit("haveSameName")
    } else {
      userName.push(nickName)
      socket.emit("userCanSendMsg")
    }
    console.log(userName);
  })
  socket.on('send', function(obj) {
    console.log(obj);
    class Info {
      constructor(msgInfo) {
        this.msgg = msgInfo.msg
        this.user = msgInfo.user
        this.time = time.setNowTimes()
      }
    }
    info = new Info(obj)
    socket.broadcast.emit('other', info);
    socket.emit('self', info);
    allMsg.push(info)
    console.log(allMsg);
  });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
console.log('監聽3000port');
