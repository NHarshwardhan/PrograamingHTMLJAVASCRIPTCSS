/* function MyModule(){
    this.sayHello = function(){
        return 'Hello'
    }
    this.printMyName = function(){
        return 'Mike'
    }
}
export default MyModule; */



// AMD Implementation

define([],function(){
    return {
        sayHello:function(){
            return 'Hello'
        },
        printMyName:function(){
            return 'Mike'
        }
    }
})