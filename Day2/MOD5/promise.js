function makePromise(){     
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         const error = true;
         if(error){
            //  console.log('Functions: Your Promise has not been resolved')
             reject();
         }
         else{
            // console.log('Functions: Your Promise has  been resolved')
            resolve();
         }  

      },2000)     

   }) 

}

makePromise()
   .then(()=>console.log('Thank You .. We got it')) //resolve
   .catch(()=>console.log('Sorry Not resolved'))  //reject