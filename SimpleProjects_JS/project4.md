# Projects related to DOM



## project 4 - Number Guessing Game
[Click here](https://stackblitz.com/edit/stackblitz-starters-yciupw29?file=4-GuessTheNumber%2Fmain.js)

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('#prevGuesses');
const remaining = document.querySelector('#remaining');
const LowOrHi = document.querySelector('#result');
const startOver = document.querySelector('.game-info');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You gussed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  if (guessSlot.textContent === 'None') {
    guessSlot.textContent = guess;
  } else {
    guessSlot.textContent += `, ${guess}`;
  }
  numGuess++;
  remaining.textContent = `${11 - numGuess}`;
}

function displayMessage(message) {
  LowOrHi.textContent = message;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    LowOrHi.textContent = '';
    playGame = true;
    startOver.removeChild(p);
  });
}

```