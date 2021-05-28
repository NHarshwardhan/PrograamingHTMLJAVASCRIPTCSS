// Establish a connection with WebSocket server

// Server Address : = wss://echo.websocket.org
// let sock = new WebSocket('wss://echo.websocket.org')
/* let log = document.getElementById('log')
let clientMsg = "Hey There"

sock.onopen = (event)=>{
    log.innerHTML+= 'Socket connected successfully'
 

    setTimeout(()=>{
           sock.send(clientMsg)
    },1000)
}

sock.onmessage = (event)=>{
    log.innerHTML+= `<br><br> Browser  : ${clientMsg}`
    log.innerHTML+= `<br>Server  : ${event.data}  `
}
 */

// After button click

var log = document.getElementById("log");
var sock ;

document.getElementById("sendBtn").onclick = () => {
  var clientmsg = document.getElementById("message").value;
  log.innerHTML += `<br><br> Browser  : ${clientmsg}`;
  sock.send(clientmsg);
};

document.getElementById("connectBtn").onclick = () => {
 sock= new WebSocket("wss://echo.websocket.org");

  sock.onopen = (event) => {
    log.innerHTML += "Socket connected successfully";
  };
  sock.onmessage = (event) => {
    log.innerHTML += `<br>Server  : ${event.data}  `;
  };
};

document.getElementById("disconnectBtn").onclick = () => {
  sock.onclose = () => {
    sock.close();
  };
  log.innerHTML += `<br>connection terminated`;
};
