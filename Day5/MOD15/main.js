/* import MyModule from './myModule.js';



var myModuleInstance = new MyModule();

console.log(myModuleInstance.sayHello())

console.log(myModuleInstance.printMyName()) */


// AMD Implementation

require(['MyModule'],function(MyModule){
    console.log(MyModule.sayHello())

    console.log(MyModule.printMyName()) 
})