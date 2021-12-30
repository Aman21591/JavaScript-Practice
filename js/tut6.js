//function of string


console.log('we are in tut 6');
const names = 'Aman';
const greeting='good morning ';
console.log(greeting + names);

let html;
html='<h1> this is heading </h1>'+
"<p> this my para</p>"; 
html=html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLocaleLowerCase());
console.log(html.toLocaleUpperCase());
console.log(html);
console.log(html[5]);
console.log(html.indexOf('is'));
console.log(html.lastIndexOf('r'));
console.log(html.charAt(1));
console.log(html.endsWith('str2'));
console.log(html.includes('is'));
console.log(html.substring(0,6));
console.log(html.slice(0,6));
console.log(html.split(' '));
console.log(html.replace('this','it'));

//templets literals
let Fruit1='orange';
let Fruit2='Apple';
let Fruit3='Banana';
let myhtml=`Hello ${name}
<h1>This is my Heading </h1>
<p> i like ${Fruit1} and ${Fruit2} and ${Fruit3} 
`;
document.body.innerHTML=myhtml;

/*
const college='Chandigarh University';
const Hostel='Zakir-B';
const MyHtml=`Hey ${name}
<h1>This is my heading Now</h1>
<p>I like to go to ${college} and ${Hostel} for studying and staying
`;
document.body.innerHTML=MyHtml;
*/






