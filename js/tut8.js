// if else conditions
// === is used for to check tyype and value like one is string and one is number

console.log('We are here');
const age=45;
if(age==22)
{
    console.log('Age is 22');
}
else if(age==65){
    console.log('Age is 65');
}
else{
    console.log('Age is not 22');
}

const vari=34;
if(typeof vari!== 'undefined'){
    console.log('vari is defined');
}
else{
    console.log('vari is not defined');
}

const doesDrive=true;
if(doesDrive && age>=19){
    console.log('you can drive');
}
else{
    console.log('you can not drive');
}

// const name='Aman';
// const Branch='CSE';
// const uid=2461;
// if(name=='Aman' && Branch=='CSE' && uid==2461){
//     console.log('you are right');
// }
// else{
//     console.log('you are wrong');
// }
// if(name=='Aman Yadav' || Branch=='CSE' || uid==2462){
//     console.log('you are right');
// }
// else{
//     console.log('you are wrong');
// }

//Terniary operator
console.log(age==45? 'Age is 45': 'Age is not 45');

//Switch statement
switch (age) {
    case 18:
        console.log("you are 18") 
        break;
    case 28:
        console.log("you are 28") 
        break;
    case 38:
        console.log("you are 38") 
        break;

    default:
        console.log("you are unknown age") 
        break;
}