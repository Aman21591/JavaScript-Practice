console.log('Welcome');
let a=document.querySelector('.no');
a=document.querySelector('.container');
// console.log(a.childNodes);
// console.log(a.children);
let nodeName=a.childNodes[1].nodeName;
console.log(nodeName);
let nodeType=a.childNodes[0].nodeType;
console.log(nodeType);

/*  *** Node Type
1.Element
2.Attribute
3.Text Node
8.Comment
9.Documnet
10.docType

*/

let cont=document.querySelector('div.container');
console.log(cont);
// console.log(cont.children[2].children[0].children);
// console.log(cont.firstChild);
console.log(cont.firstElementChild);
console.log(cont.lastChild);
console.log(cont.lastElementChild);
console.log(cont.children);
console.log(cont.childElementCount);
console.log(cont.firstElementChild.parentNode);
console.log(cont.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);


