console.log('welcome');

// in this lecture we event listner

// let btn=document.getElementById('btn');
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// btn.addEventListener('mousedown',func3);

// function func1(e) {
//     console.log('Thanks',e);
//     e.preventDefault();

// }
// function func2(e) {
//     console.log('Double click',e);
//     e.preventDefault();

// }
// function func3(e) {
//     console.log('Thanks its a mouse down',e);
//     e.preventDefault();

// }

document.querySelector('.no').addEventListener('mouseenter',function () {
    console.log('you entered no');
});
document.querySelector('.no').addEventListener('mouseleave',function () {
    console.log('you exited no');
});

//same things written but for different class

document.querySelector('.yes').addEventListener('mouseenter',function () {
    console.log('you entered yes');
});
document.querySelector('.yes').addEventListener('mouseleave',function () {
    console.log('you exited yes');
});
document.querySelector('.container').addEventListener('mousemove',function (e) {
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetX + e.offsetY})`;
    console.log('you move yes');
});
