onmessage  =(event)=>{
     console.log(event)
     console.log('Worker:  Message Recived from main.js')

     const result = event.data[0] * event.data[1]
     const workerresult = `Result : ${result}`
     console.log("Worker: Posting result back to main.js")
     
     
     postMessage(workerresult)
}