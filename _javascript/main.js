
// ----------------------------
//           Global
// ----------------------------
document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello, Developer!');
});

// ----------------------------
//        Event Handlers
// ----------------------------
const clickAlert = () => {
  alert(`You've clicked a button!`);
};

const heroButton = document.querySelector('#hero-button');
const sectionTwoButton = document.querySelector('#section-2-btn');
const sectionFourButton = document.querySelector('#section-4-btn');

heroButton.addEventListener('click', clickAlert);
sectionTwoButton.addEventListener('click', clickAlert);
sectionFourButton.addEventListener('click', clickAlert);

