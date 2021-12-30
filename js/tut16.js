// in this we learn to creating a node


console.log('Hey Aman'); 
// let element=document.createElement('li');
// //Add a class name to li element

// element.className='childul';
// element.id='createdLi';
// element.setAttribute('title','mytitle');
// element.innerHTML='Hey Aman is Here';
// let ul=document.querySelector('ul.this');
// ul.appendChild(element);
// console.log(ul);

// console.log(element);

// same thing try angain for me



let myName=document.createElement('li');
myName.className='childul';
myName.id='departedLi';
myName.setAttribute('title','mytitle');
myName.innerHTML='Hey Aman How are you';
let ul=document.querySelector('ul.Aman');
ul.appendChild(myName);
console.log(ul);

//Replacing element
 
let elm2=document.createElement('h3');
elm2.id='elm2';
elm2.className='elm2';
let tnode=document.createTextNode('How are you');
elm2.appendChild(tnode);
myName.replaceWith(elm2);

myName.replaceWith(elm2);
let myul=document.getElementById('myul');
myul.replaceChild(myName,document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));

