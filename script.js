let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const points = document.querySelector('.right');
const currScore = document.querySelector('.score');
const num = document.querySelector('.number');
const body = document.querySelector('body');
const currGuess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check')
const displayMsg = document.querySelector('.message');
const againBtn = document.querySelector('.again');
const headerEle = document.querySelector('header');

const displayMessage = (message) => {
  displayMsg.textContent = message;
};

const correctNum = () => {
  num.textContent = secretNum;
  body.style.backgroundColor = '#60b347';
  body.style.color = '#000';
  points.style.color = '#000';
  points.style.backgroundColor = '#ccc';
  points.style.textAlign = 'center';
  points.style.padding = '20px';
  points.style.borderRadius = '5px';
  points.style.fontSize = '4rem';
  checkBtn.style.display = 'none';
  num.style.width = '30rem';
}

checkBtn.addEventListener('click', () => {
  const guess = Number(currGuess.value);
  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNum) {
    displayMessage('Correct Number!');
    correctNum();

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? 'Too high!' : 'Too low!');
      score -= 1;
      currScore.textContent = score;
    } else {
      displayMessage('You lost the game!');
      currScore.textContent = 0;
    }
  }
});

const resetBoard = () => {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  currScore.textContent = score;
  num.textContent = '?';
  currGuess.value = '';
  body.style.backgroundColor = '#222';
  headerEle.style.color = '#fff';
  num.style.width = '15rem';
  checkBtn.style.display = 'block';
}

againBtn.addEventListener('click', resetBoard);
