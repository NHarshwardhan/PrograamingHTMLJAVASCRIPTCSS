let first = document.getElementById('number1')
let second = document.getElementById('number2')

let result = document.getElementById('result')

// Call Dedicated worker

const myWorker = new Worker('dedicatedworker.js')

first.onchange = ()=>{
    myWorker.postMessage([first.value,second.value])
    console.log('Message Posted to worker')
}

second.onchange = ()=>{
    myWorker.postMessage([first.value,second.value])
    console.log('Message Posted to worker')
}


myWorker.onmessage = (event)=>{
    result.innerHTML = event.data
    console.log('Message received from worker')
}