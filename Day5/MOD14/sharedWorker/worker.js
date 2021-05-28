self.onconnect = (event)=>{
    
    var port = event.ports[0] //multiply.js
    
    port.onmessage = (event)=>{
        const result = event.data[0] * event.data[1]
        const workerresult = `Result : ${result}`
        port.postMessage(workerresult)

    }


}