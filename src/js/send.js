const socket = io("ws://localhost:3000");
let ms = document.querySelector("#message");
let send  = document.querySelector("#send")
socket.on("enter",(data)=>{
	showInfo("enter",data)
})
socket.on("text",(data)=>{
	console.log(data)
	showInfo("text",data)
})
socket.on("leave",(data)=>{
	showInfo("leave",data)
})
send.onclick = ()=>{
	socket.emit("text",document.querySelector("#sendMs").value);
}
function showInfo(type,res){
	let p = document.createElement("p");
	p.innerHTML += "<br/>"+res;
	if (type === "enter") {
		p.style.color = "blue";
	}
	else if (type === "text") {
		p.style.color = "black";
	}
	else {
		p.style.color = "green";
	}
	ms.appendChild(p);
}