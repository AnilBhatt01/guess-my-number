'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function changeBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When no input

  if (!guess) {
    displayMessage('🙄 No number!');
  }
  // When guess is equal
  else if (guess === secretNumber) {
    displayMessage('🤩 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    let highScore = document.querySelector('.highscore');
    if (highScore.textContent < score) {
      highScore.textContent = score;
    }
    changeBackgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';

    // When guess is wrong
  } else if (guess !== secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    guess > secretNumber
      ? displayMessage('🚩 Too High!')
      : displayMessage('🚩 Too Low!');
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  changeBackgroundColor('#222');
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
