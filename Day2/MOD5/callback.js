/* 
 A function which is passed as a parameter to another function
*/

console.log('Started....')

// function callMe(){
//     for(let i=0; i< 999; i++){
//         console.log(i)
//     }
// }
// setTimeout(function(){
//     for(let i=0; i< 999; i++){
//         console.log(i)
//     }
// },2000)
//OR
setTimeout(()=>{
    for(let i=0; i< 999; i++){
        console.log(i)
    }
},2000)




console.log('End of the process...')