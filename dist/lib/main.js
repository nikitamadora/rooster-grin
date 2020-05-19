'use strict';

// ----------------------------
//           Global
// ----------------------------
document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello, Developer!');
});

// ----------------------------
//        Event Handlers
// ----------------------------
var clickAlert = function clickAlert() {
  alert('You\'ve clicked a button!');
};

var heroButton = document.querySelector('#hero-button');
heroButton.addEventListener('click', clickAlert);