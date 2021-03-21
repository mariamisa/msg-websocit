const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});
const port = process.env.PORT || 8080;

app.get('/hi',(req,res)=>{
  res.json({data:'hi here'})
})

io.on('connection', (socket) => {
  socket.on('chat', msg => {
    io.emit('chat', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
