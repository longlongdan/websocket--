const ws = require("nodejs-websocket")
const arr=[];
let connectionNum = 0;
const server = ws.createServer(function (conn) {
	console.log("New connection")
	connectionNum++;
	borderCast(connectionNum+"com in")
	conn.on("text", function (str) {
		console.log("Received "+str)
		borderCast(str)
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
	})
	conn.on("error",function(err) {
		console.log("error handle:"+err)
	})
}).listen(3000)
function borderCast(str){
	server.connections.forEach(connection=>{
		connection.sendText(str);
	})
}
console.log("server is listening port 3000...");