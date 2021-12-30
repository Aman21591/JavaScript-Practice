console.log('Welcome to Local & Session storage');
let impArray=['Mango','Papaya','Orange'];
localStorage.setItem('Name','Aman');
localStorage.setItem('Name2','Yadav');

localStorage.setItem('Name3',JSON.stringify( impArray));


//it clear the entire local storage
// localStorage.clear();

//clear a particular key-value pair
localStorage.removeItem('Name2');

//retrive an item from the local storage
let name=localStorage.getItem('Name2');
console.log(name);
let Name=JSON.parse(localStorage.getItem('Name3'));
console.log(Name);


//Session storage
sessionStorage.setItem('sessionName','sAman');
sessionStorage.setItem('sessionName2','sYadav');

sessionStorage.setItem('sessionName3',JSON.stringify( impArray));
