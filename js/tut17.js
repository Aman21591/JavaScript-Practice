console.log("Hey there");

// Events & Event object

document.getElementById("heading").addEventListener("click", function (e) {
  console.log("you have clicked the heading");
  let variable;
  variable = e.target;
  variable = e.target.className;
  variable = e.target.classList;
  variable = Array.from(e.target.classList);

  console.log(variable);
  // location.href='//google.com';
  // it locate the location to the page
});

document.getElementById("fui").addEventListener("click", function (e) {
  console.log("You are here");
  let name;
  name = e.target;
  name = e.target.className;
  name = e.target.classList;
  name = Array.from(e.target.classList);
  name = e.target.id;
  name = e.offsetX; 
  console.log(name);
});
