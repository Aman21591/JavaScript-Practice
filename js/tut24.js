console.log('Date object');


let today=new Date();
// console.log(today);

let otherDate=new Date('12-13-2000 10:20:00');
otherDate=new Date('dec 13 2000 10:20:00');
otherDate=new Date('12/13/2003 10:20:00');
console.log(otherDate);

let c=otherDate.getDay();
c=otherDate.getDate();
c=otherDate.getTime();
c=otherDate.getHours();
console.log(c);

otherDate.setDate(26);
otherDate.setMonth(10);
otherDate.setFullYear(2001);
console.log(otherDate);