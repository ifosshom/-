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


