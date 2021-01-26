alert("You woke up in a large room and you are all alone, how did you get here\? Can you escape\?")

let char = document.querySelector("#char");
let char2 = document.querySelector("#char2");
let char3 = document.querySelector("#char3");
let char4 = document.querySelector("#char4");
let desno = document.querySelector("#desno");
let levo = document.querySelector("#levo");
let gore = document.querySelector("#gore");
let dole = document.querySelector("#dole");
let prozor = document.querySelector("#window");
let prozor2 = document.querySelector("#window2");
let box = document.querySelector("#box");
let cabinet = document.querySelector("#cabinet");
let cabinet2 = document.querySelector("#cabinet2");
let saw = document.querySelector("#saw");
let key = document.querySelector("#key");
let pipe = document.querySelector("#pipe");
let water = document.querySelector("#water");
let bed = document.querySelector("#bed");
let crates = document.querySelector("#crates");
let inventory = [];
var rat = new Audio();
rat.src = "zvuk/rat.mp3";

function hod() {
  walk.play();
}
walk = new Audio();
walk.src = "zvuk/walk.mp3";

function mis() {
  rat.play();
}
box2 = new Audio();
box2.src = "zvuk/box.mp3";

function kutija() {
  box2.play();
}
var cabinet3 = new Audio();
cabinet3.src = "zvuk/cabinet.mp3";

function ormar() {
  cabinet3.play();
}

var water2 = new Audio();
water2.src = "zvuk/water.mp3";

function voda() {
  water2.play();
}

var crack = new Audio();
crack.src = "zvuk/crack.mp3";

function lom() {
  crack.play();
}

var saw2 = new Audio();
saw2.src = "zvuk/saw.mp3";

function testera() {
  saw2.play();
}

var click = new Audio();
click.src = "zvuk/click.mp3";

function klik() {
  click.play();
}

function scrollWin(x, y) {
  window.scrollBy(x, y);
}

gore.addEventListener("click", function() {
  char.style.visibility = "hidden";
  char3.style.visibility = "hidden";
  char4.style.visibility = "hidden";
  char2.style.visibility = "visible";
})

dole.addEventListener("click", function() {
  char2.style.visibility = "hidden";
  char3.style.visibility = "hidden";
  char4.style.visibility = "hidden";
  char.style.visibility = "visible";
})

desno.addEventListener("click", function() {
  char.style.visibility = "hidden";
  char2.style.visibility = "hidden";
  char4.style.visibility = "hidden";
  char3.style.visibility = "visible";
})

levo.addEventListener("click", function() {
  char.style.visibility = "hidden";
  char2.style.visibility = "hidden";
  char3.style.visibility = "hidden";
  char4.style.visibility = "visible";
})

bed.addEventListener("click", function() {
  alert("Old bed, looks uncomfortable");
})

water.addEventListener("click", function() {
  alert("A puddle of water, where did it came from?");
})

crates.addEventListener("click", function() {
  alert("A pile of crates, very heavy to move");
})

key.addEventListener("click", function() {
  alert("You took the key");
  key.style.visibility = "hidden";
  inventory.push(key);
  inventory[key] = true;
})

cabinet.addEventListener("click", function() {
  if (inventory[key] == true) {
    alert("You used the key to open the cabinet");
    cabinet.style.visibility = "hidden";
    cabinet2.style.visibility = "visible";
    saw.style.visibility = "visible";
  } else {
    alert("You need a key to open this cabinet");
  }
})

saw.addEventListener("click", function() {
  saw.style.visibility = "hidden";
  alert("You took the saw");
  inventory.pop();
  inventory.push(saw);
  inventory[saw] = true;
  if (inventory[saw] == true) {
    pipe.style.visibility = "visible";
  }
})

pipe.addEventListener("click", function() {
  pipe.style.visibility = "hidden";
  alert("You sawed off the pipe from the bed");
  alert("You took the pipe");
  inventory[pipe] = true;

})

prozor.addEventListener("click", function() {
  if (inventory[pipe] == true) {
    prozor.style.visibility = "hidden";
    prozor2.style.visibility = "visible";
    alert("You pried the window open with the pipe!")
  } else {
    alert("The window is shut! you need something to pry it open");
  }

})
