import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import cors from "cors" 

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
interface IUsers {
  userId:string,
  socketId:string
}
let users:IUsers[] = []

const addUser= (userId:string, socketId:string)=>{
  !users.some((user) => user.userId === userId) && users.push({userId, socketId})
}
const removeUser =(socketId:string)=>{
  users = users.filter((user)=> user.socketId!== socketId)
}
const getUser = (userId:string)=>{
  return users.find((user)=>user.userId===userId)
}


io.on('connection', (socket: Socket) => {
    console.log('user connected');
  socket.on("addUser", userId=>{
    addUser(userId, socket.id)
    io.emit("getUsers", users)
  })
// send and get messages
socket.on('sendMessage', ({senderId, receiverId, text})=>{
  const user:any = getUser(receiverId)
  io.to(user?.socketId).emit("getMessage", {
    senderId,
    text
  })
})
console.log("usersarray", users)
  // when disconnect
  socket.on('disconnect', ()=>{
    console.log("a user is disconnected")
    removeUser(socket.id)
    io.emit("getUsers", users)
  })
  });

  server.listen(8000, () => {
    console.log('listening on *:8000');
  });