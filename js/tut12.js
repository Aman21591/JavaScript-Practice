console.log('I am here');
// let a=document;
// a=document.all;
// // a=document.body;
// // a=document.forms[0];
// // Array.from(a).forEach(function(element) { 
// //     console.log(element);
// // });
// a=document.links[0].href;

// console.log(a);
let b=document.images;
Array.from(b).forEach(function(element){
    console.log(element);
});

let c=document.scripts;
Array.from(c).forEach(function(element){
    console.log(element);
});