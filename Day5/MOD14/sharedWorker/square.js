let first = document.getElementById('number3')


let result = document.getElementById('result')

// Call Dedicated worker

const myWorker = new SharedWorker('worker.js')
//2 2*2
first.onchange = ()=>{
    myWorker.port.postMessage([first.value,first.value])
    console.log('Message Posted to worker')
}


myWorker.port.onmessage = (event)=>{
    console.log(event)
    result.innerHTML = event.data
    console.log('Message received from worker')
}