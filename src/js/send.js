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
	let p = document.createElement("p");
	res = JSON.parse(res.data);
	p.innerHTML += "<br/>"+res.data;
	if (res.type === "enter") {
		p.style.color = "blue";
	}
	else if (res.type==="text") {
		p.style.color = "black";
	}
	else {
		p.style.color = "green";
	}
	ms.appendChild(p);
}