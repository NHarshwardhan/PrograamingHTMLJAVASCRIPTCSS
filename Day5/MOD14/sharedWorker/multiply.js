let first = document.getElementById('number1')
let second = document.getElementById('number2')

let result = document.getElementById('result')

// Call Dedicated worker

const myWorker = new SharedWorker('worker.js')

first.onchange = ()=>{
    myWorker.port.postMessage([first.value,second.value])
    console.log('Message Posted to worker')
}

second.onchange = ()=>{
    myWorker.port.postMessage([first.value,second.value])
    console.log('Message Posted to worker')
}


myWorker.port.onmessage = (event)=>{
    console.log(event)
    result.innerHTML = event.data
    console.log('Message received from worker')
}