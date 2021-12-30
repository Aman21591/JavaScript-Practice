//Function in java script
console.log('I am here');
let name='Aman';
let name2='Yadav'
console.log(`Good morning ${name} I can appreciate coffee without cream, overtime without pay, nights without lights, meals without rice, hamburger without cheese, but never a whole day without greeting you. `);
console.log(`Good morning ${name2} I can appreciate coffee without cream, overtime without pay, nights without lights, meals without rice, hamburger without cheese, but never a whole day without greeting you. `);

// another way to write the same things

function greet(name,thanks='Thank you') {
    console.log(`Good morning ${name} I can appreciate coffee without cream, overtime without pay, nights without lights, meals without rice, hamburger without cheese, but never a whole day without greeting you.${thanks} `);   
}
greet(name);

//one more another way to use fxn
function greets(name,thanks='Thank you')
{let msg=`Good morning ${name} I can appreciate coffee without cream, overtime without pay, nights without lights, meals without rice, hamburger without cheese, but never a whole day without greeting you.${thanks}`;
return msg;}
let val=greets(name);
console.log(val)


//creationg object using fxn
let myobj={
    name:'Aman',
    game:function() {
        return 'GTA'
    }
}
console.log(myobj.game());

// using loops
arr=['fruits','sabji','rice'];
arr.forEach(function(element,array,index) {
    console.log(element,array,index);
});

//Scope***
if(1){var i=234;
console.log(i);
}
console.log(i);

function ui(names) {
    var i=9;
    console.log(i);
    return `This is a ${names} ui`;
}
console.log(ui('Aman Yadav'),i);





