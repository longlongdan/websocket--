const io = require('socket.io')(3000)
let connectionNum = 0;

io.on("connection",(socket)=>{
	console.log("new connection")
	connectionNum++;
	socket.nickName = "用户"+connectionNum;
	io.emit("enter",socket.nickName+"com in")
	socket.on("text",(str)=>{
		console.log(str+"recived")
		io.emit("text",socket.nickName+"said:" +str);
	})
	socket.on("disconnect",()=>{
		io.emit("leave",socket.nickName+"leave");
	})
})
//app.listen(3000)
console.log("server is listening port 3000...");