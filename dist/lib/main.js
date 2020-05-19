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
var sectionTwoButton = document.querySelector('#section-2-btn');
var sectionFourButton = document.querySelector('#section-4-btn');

heroButton.addEventListener('click', clickAlert);
sectionTwoButton.addEventListener('click', clickAlert);
sectionFourButton.addEventListener('click', clickAlert);