/* 
  var : - functional scope
  let : - block scope
  const : constant variable

*/

// function printMyName(){

//      if(true){
//          var myname = "Mike";
//          console.log(myname);
//      } 
//      console.log(myname);
// }

/* 
function printMyName(){
     var myname;
     if(true){
         myname = "Mike";
         console.log(myname);
     } 
     console.log(myname);
}
*/


// printMyName()

// ----------------------

const num1 = 7; //global variable
function calculate(){
    if(true){
        var num1=42; //global varaible
        let num2 = 43;
    }
    console.log('The value of num1 is: '+ num1); //42
    try{
        console.log('The value of num2 is :'  +num2); //
    }
    catch(err){
        console.log('num2 is not defined')
    }
}

calculate();