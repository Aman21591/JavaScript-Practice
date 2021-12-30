console.log('Hello');
/* DOM SELECTOR
element selector
1.Single element selector
2.multi element selector
*/

//Single element selector

let element = document.getElementById('myfirst');
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
element.style.color="blue";
// element=element.innerText;
element.innerText="Aman Yadav";
element.innerHTML='<b>Aman Yadav</b>';
// console.log(element);

let sel=document.querySelector('#myfirst');
sel=document.querySelector('.child');
sel=document.querySelector('h1');
sel=document.querySelector('div');
sel.style.color="red";
// console.log(sel);

//Multi element selector
let name=document.getElementsByClassName('child');
name=document.getElementsByClassName('container');
name=document.getElementsByTagName('div');
console.log(name);

// Array.from(name).forEach(element=>{
//    console.log(element);
//    element.style.color="green";
// });

// other options for using for loop or forEach loop

for (let index = 0; index < name.length; index++) {
    const element = name[index];
    console.log(element);
    element.style.color='blue';
    
}
  

