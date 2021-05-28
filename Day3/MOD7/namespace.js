var car = {
     brand:'Benz',
     startEngine: function(){
          console.log("Car started")
     }
}


var bike={
     brand:'BMW',
     startEngine:function(){
         console.log('Bike started')
     }
}

car.startEngine();
bike.startEngine();
console.log(car.brand)
console.log(bike.brand)