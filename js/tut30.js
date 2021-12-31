console.log("Prototype inheritance");

const proto = {
  slogan: function () {
    return `This company is the best`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

// This also create an object

let Aman = Object.create(proto);
Aman.name = "Aman Yadav";
Aman.role = "Coder";
Aman.changeName("Amit Yadav");
// console.log(Aman);

//this also creates an object

const Aman1 = Object.create(proto, {
  name: { value: "aman", writable: true },
  role: { value: "Coder" },
});
Aman1.changeName("Amit");

// console.log(Aman1);

//Employe Constructor

function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}
//Slogan
Employee.prototype.slogan = function () {
  return `This company is the best regards ${this.name}`;
};
let AmanYadav=new Employee("Amit Yadav",40000,13);
console.log(AmanYadav);

//Programmer
function Programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);
    this.language=language;

}
//Inherit the prototype
Programmer.prototype=Object.create(Employee.prototype);
Programmer.prototype.constructor=Programmer;
let amit=new Programmer("Nickname",60000,12.5,"HTML");
console.log(amit);


//Another Example for same that are abve

const Hotel={
    slogan:function(){
        return `This Hotel is best`

    },
    changeName: function(newName){
        this.name=newName;
    }
};
let foodName= Object.create(Hotel);
foodName.name="Chicken";
foodName.piece="leg part";
foodName.test="spicey";
// console.log(foodName);
function HotelArea(name,rating,foodTest){
    this.name=name;
    this.rating=rating;
    this.foodTest=foodTest;
}
HotelArea.prototype.slogan=function(){
    return `This Hotel is best Dishes is ${this.name}`;
    
};
let mutton=new HotelArea("Body Part",4.7,"Too Much");
console.log(mutton);

function Cake(name,rating,foodtest,flavour){
    HotelArea.call(this,name,rating,foodtest);
    this.flavour=flavour;
};
Cake.prototype= Object.create(HotelArea.prototype);
Cake.prototype.constructor=Cake;
let yadav=new Cake("Bound",4.9,"Good","Chocklet");
console.log(yadav);
