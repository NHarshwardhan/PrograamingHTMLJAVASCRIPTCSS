/* document.getElementById('btnBigloop').onclick = ()=>{
   
    let final = 0;
    for(let i = 0 ;i <100000000000; i++){
        final +=i
    }
    document.getElementById('output').innerHTML = final;
}


document.getElementById('btnSayHi').onclick = ()=>{
      alert('Hi Everyone..!')
} */



// Code that works with Worker

document.getElementById('btnBigloop').onclick = ()=>{
    console.log('worker is started...')
    
    //create instance of worker
    const myWorker = new Worker('withworker.js')
    
    //Sending instruction to start worker
    myWorker.postMessage('start work..');

    //Receiving result from worker
    myWorker.onmessage  = (event)=>{
        console.log('Worker has finished work')
        document.getElementById('output').innerHTML = event.data;
    }
   
}

document.getElementById('btnSayHi').onclick = ()=>{
      alert('Hi Everyone..!')
} 
