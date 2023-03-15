"use strict"

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yr2.jpg') {
      myImage.setAttribute ('src','images/yr.jpg');
    } else {
      myImage.setAttribute ('src','images/yr.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Ты кто??????');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Спасибо твоим родителям за то что назвали тебя ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Спасибо твоим родителям за то что назвали тебя ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}

