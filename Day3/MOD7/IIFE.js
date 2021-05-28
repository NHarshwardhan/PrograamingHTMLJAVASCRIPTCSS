// var counter = 10;

// function add(a,b){
//     return a+b;
// }

/* 
1) when we define function or variables in JS, it considered as global object
  and can be acceessible anywhere.

  1) Window Object  : - GLobal Object
  2) Document Object : - Document Object
*/

// THese two has addedd into Global Object
// console.log(window.add)
// console.log(window.counter)

// Having GLobal variables and functions cause the name collisions
// -----------------------------------------------------------------------


// IIFE (Immediately invoked Function expression)

// let sum = (10+20); //expression

// let add = (function(a,b){
//    return a+b; //30
// })(10,20)

// console.log(add)

// IIFE Syntax
// (function(a,b){
//     return a+b; //30
//  })(10,20)

/* 
  (function(){
      
    //code

  })();
  -----Using Arrow Function---------- 
  ((a,b)=>{

  })(10,20);

*/

// Variable and FUnction inside IIFE
(function(){
  var counter = 0;

  function add(a,b){
      return a+b;
  }
  
   console.log(add(10,20)) //30
})();

console.log(window.counter)
console.log(window.add)
