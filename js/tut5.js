// type conversion 
console.log('Welcome to this file');
let Myvar;
Myvar=String(34);
console.log(Myvar,(typeof Myvar));

let booleanVar=String(true);
console.log(booleanVar,(typeof booleanVar));

let mydate = new Date();
console.log(mydate,typeof(mydate));

let i=10;
console.log(i.toString());

let str1=Number("2461");
console.log(str1,typeof(str1));

let num=parseInt("2461.2461");
console.log(num,typeof(num));

let num1=parseFloat("2461.2461");
console.log(num1,typeof(num1));

let num2=parseFloat("2461.2461");
console.log(num2.toFixed(5),typeof(num2));

// type coercion
let mystr="2461";
let mynum=56;
console.log(mystr+mynum);






