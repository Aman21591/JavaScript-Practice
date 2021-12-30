console.log("Object literals and constructor");

let h={
    name:"Aman",
}
console.log(typeof(h));

let bike={
    name:"pulser",
    speed:"110km/h",
    weight:"150kg",
    run:function() {
        console.log("Bike is scadding");
    }
}
console.log(bike);

//using constructor

function GeneralBike(newName,newSpeed){
    this.name=newName;
    this.speed=newSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
    this.analyze=function() {
        console.log(`This Bike is slower by ${180-this.speed}Km/h than Bugati`);
    }
}
Bike1=new GeneralBike('Royal Enfild',110);
console.log(Bike1);

// same example

let Truck = {
  names: "Tata",
  speeds: 80,
  weights: 500,
  run: function () {
    console.log("Truck is running at high speed");
  },
};
console.log(Truck);

function NormalTruck(nickName, nickSpeed, nickWeight) {
  this.names = nickName;
  this.speeds = nickSpeed;
  this.weights = nickWeight;
  this.run = function () {
    console.log(`${this.names} is running on the road`);
  };
  this.analyze=function(){
      console.log(`This Truck is slower by ${165-this.speeds}km/h than Car`);
  }
}
Truck1 = new NormalTruck("Tata Moters", 95, 650);
console.log(Truck1);
