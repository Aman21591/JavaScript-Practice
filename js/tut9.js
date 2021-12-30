//in this tutorial we learn about loofs like: for loops,while loops,do-while loops
console.log("we are here");
// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }

let j = 1;
while (j < 10) {
  console.log(j);
  j++;
}
console.log('hey!');
let k=0;
do{
    console.log(k+1);
    k++;
}while(k<10)

//break and counitnous
let m=0;
do{
    console.log(m+1);
    if(m==5){
        break;
    }
    m++;
}while(m<10)
console.log('Done');

//arrays or object

let arr=[1,12,35,64];
arr.forEach(function(element){
    console.log(element);
});

// or another method for same arr

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
}

// use of object

let obj={
    name:'Aman',
    age:22,
    college:'Chandigarh University',
    branch:'CSE'
}
for(let key in obj)
{
    console.log(`the ${key} of object is ${obj[key]}`);
}


