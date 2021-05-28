onmessage = ()=>{
    let final = 0;
    setTimeout(()=>{
        for(let i = 0 ;i <10000000000000000000000000000000000; i++){
            final +=i
        }
    },2000)
   
    //sending result back to js file
    postMessage(final)
}