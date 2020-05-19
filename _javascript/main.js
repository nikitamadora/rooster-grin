
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
heroButton.addEventListener('click', clickAlert);


