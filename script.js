'use strict';
const secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNum;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'Correct number!';
  } else if (guess > secretNum) {
    document.querySelector('.message').textContent = 'Too high!';
  } else {
    document.querySelector('.message').textContent = 'Too low!';
  }
})