var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
"use strict";

let valid = true;
let answer = prompt("Любишь yungrussia?", "");
if (answer == да || answer == "") {
  alert("Ты не ответил да!");
  valid = false;
}
