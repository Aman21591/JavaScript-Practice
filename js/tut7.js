console.log("Is this file is running or not");
//arrays
let marks=[11,35,65,89,14] ;
const fruits=['Apple','Banana',"pineapple"];
const mixed=['str',23,[25,6,9]];
const arr=new Array(23,256,84,'orange');
console.log(arr);
console.log(arr.length);
console.log(marks);
console.log(fruits);
console.log(mixed[2][1]);
console.log(Array.isArray(marks));
fruits[0]="Orange";
console.log(fruits);

//Index of method
let value=marks.indexOf(35);
console.log(value);

//mutating or modifying arrays

marks.push(2461);
console.log(marks);
marks.unshift(25);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.splice(0,1);
console.log(marks);
marks.reverse();
console.log(marks);
let marks2=[1,5,12,13];
marks=marks.concat(marks2);
console.log(marks);

//object

let myobj={
    name:'Aman Yadav',
    college:'Chandigarh University',
    Branch:'CSE',
    uid:[2461,2462,2463,2465],
}
console.log(myobj);
console.log(myobj.uid);
