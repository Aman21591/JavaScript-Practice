console.log('Object prototype');

//object literal

let obj={
    name:"Aman",
    Branch:"CSE",
    college:"Chandigarh University"
    
}

function Obj(Name,branch,College){
    this.name=Name,
    this.Branch=branch,
    this.college=College
}
Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(newName){
    this.name=newName;
}
let obj2= new Obj("Amit","General CSE","Private College");
console.log(obj2);