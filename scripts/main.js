"use strict"

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let valid = true;
let answer = prompt("Любишь yungrussia?", "");
if ('answer == да' ) {
  alert("Ты не ответил да!");
  valid = false;
}
