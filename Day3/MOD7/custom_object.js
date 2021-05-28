// // // Creating Custom Object
// // // let employee={}

// // // employee.name = "John Cena";
// // // employee.age = 21
// // // employee.salary = 10000;
// // // employee.payRise = function(amount){
// // //      this.salary += amount;
// // //      return this.salary
// // // }

// // // // Accessing Properties on an Object
// // // console.log(employee.name)
// // // let newSalary = employee.payRise(4000);
// // // console.log(newSalary)


// // // 2nd approach

// // // let employee={
      
// // // }

// // // employee.displayDetails()
// // // employee.payRise(5000)
// // // employee.displayDetails()

// // // Object  Constructor
// // const employee = function(id,name,age,salary){
// //      this.id = id
// //      this.name=name
// //      this.age = age
// //      this.salary = salary
// //      this.balance=0
// //      this.numTransaction=0;
// // }
// // // Prototype
// // employee.prototype = {
// //      deposit:function(amount){
// //          this.balance = this.balance +amount;
// //          this.numTransaction++;
// //      },
// //      withdraw:function(amount){
// //          this.balance = this.balance - amount;
// //          this.numTransaction++;
// //      },
// //      displayDetails:function(){
// //          console.log(`${this.id} , ${this.name} balance $  ${this.balance} (${this.numTransaction} transactions)`)
// //      }
// // }


// // let acc1 = new employee(1,'John Cena',21,10000)
// // let acc2 = new employee(2,'Peter Parker',24,14000)

// // acc1.deposit(100)
// // acc1.displayDetails()

// // acc2.withdraw(50)
// // acc2.displayDetails()

// // ES2015 , class


// class Employee{
//     #name; 
//      constructor(id,name){
//          this.id = id
//          this.#name = name
//          this.balance = 0;
//          this.numTransaction = 0;
//      }
//      deposit(amount){
//         this.balance = this.balance +amount;
//         this.numTransaction++;
//      }
//      withdraw(amount){
//         this.balance = this.balance -amount;
//         this.numTransaction++;
//      }
//      displayDetails(){
//        console.log(`${this.id} , ${this.name} balance $  ${this.balance} (${this.numTransaction} transactions)`)

//      }

//      getName(){
//          return this.#name;
//      }
// }

// let acc1 = new Employee(1,'SONY',21,10000)
// let acc2 = new Employee(2,'Peter Parker',24,14000)

// // acc1.deposit(100)
// // acc1.displayDetails()

// // acc2.withdraw(50)
// // acc2.displayDetails()

// console.log(acc1.getName())
// // acc1.name="BMW"
// // console.log(acc1.name)


// // Encapsulation



// Inheritance

// Parent
class Person{
     constructor(name,age){
         this.name=name
         this.age = age
     }
     haveBirthday(){
         this.age++;
     }
}

// child
class Student extends Person{
     constructor(name,age,subject){
         super(name,age) //caaling parent constructor and pass name,age to initialize
         this.subject = subject
     }
}

let std1 = new Student("John",20,"Math");
console.log(std1)


/* 
 How can you guard against name clashes in javascript ?
IIFE,NS,Module,
*/