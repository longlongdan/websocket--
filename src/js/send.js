const socket = new WebSocket("ws://localhost:3000");
let ms = document.querySelector("#message");
let send  = document.querySelector("#send")
socket.onopen = ()=>{
	ms.innerHTML = "connection";
}
send.onclick = ()=>{
	socket.send(document.querySelector("#sendMs").value);
}
socket.onmessage = (res)=>{
	ms.innerHTML += "<br/>"+res.data;
}