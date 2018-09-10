const ws = require("nodejs-websocket")
let connectionNum = 0;
const server = ws.createServer(function (conn) {
	console.log("New connection")
	connectionNum++;
	conn.nickName = "用户"+connectionNum;
	borderCast(conn.nickName+"com in","enter")
	conn.on("text", function (str) {
		console.log("Received "+str)
		borderCast(conn.nickName+"said:" +str,"text")
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
		borderCast(conn.nickName+"leave","leave")
	})
	conn.on("error",function(err) {
		console.log("error handle:"+err)
	})
}).listen(3000)
function borderCast(str,type){
	server.connections.forEach(connection=>{
		connection.sendText(JSON.stringify({type,data:str}));
	})
}
console.log("server is listening port 3000...");