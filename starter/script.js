'use strict';
/*
console.log(document.querySelector('.message').textContent); //to open emojes(windows+.)
document.querySelector('.message').textContent = '🎉 Correct Number!'; //DOM manipulation

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/
/////////////////////////////////////////////////////////////////////////////////
let secretNumber = Math.trunc(Math.random() * 20) + 1; //(Math.trunc(Math.random() * 20) used to add a random number between 1 to 19 and by adding 1 will get a number between 1 to 20
let score = 20; //starts from 20 then it will be increased with every wrong checked number
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //addEventListener used to add an event handler
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); //i think that it is not important 🙄

  // When there is no input
  if (!guess) {
    //if there is no input then this condition will be true
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    //if the selected number is equal to secret number then the message will be displayed
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 11) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}); /*

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
// Coder Shiyar   -   https://youtube.com/codershiyar
// ----------------------------------------------------
/*
let arabic = document.getElementById('arabic');
let english = document.getElementById('english');
let title = document.getElementById('title');
let about = document.getElementById('between1');
let again1 = document.getElementById('again1');
let check = document.getElementById('check1');
let startGess = document.getElementById('startGess');
let scoree = document.getElementById('score1');
let hs = document.getElementById('hs1');
let sp = document.getElementById('sp');
let sp2 = document.getElementById('sp2');

arabic.onclick = () => {
  setLanugage('arabic');
  localStorage.setItem('Lang', 'arabic');
};

english.onclick = () => {
  setLanugage('english');
  localStorage.setItem('Lang', 'english');
};

onload = () => {
  setLanugage(localStorage.getItem('Lang'));
};
function setLanugage(getLanuage) {
  if (getLanuage === 'arabic') {
    title.innerHTML = 'ژمارەکەم پێشبینی بکە';
    about.innerHTML = 'لە نێوان 1 بۆ 20';
    again1.innerHTML = 'دەستپێکردنەوە';
    check.innerHTML = 'بەراورد کردن';
    startGess.innerHTML = '...دەست بە بیرکردنەوە بکە';
    scoree.innerHTML = '💯نمرە';
    hs.innerHTML = '🥇بەرزترین نمرە';
    sp.innerHTML = '0';
    sp2.innerHTML = '20';
  } else if (getLanuage === 'english') {
    title.innerHTML = 'Guess my number';
    about.innerHTML = '(Between 1 and 20)';
    again1.innerHTML = 'Again';
    check.innerHTML = 'Check';
    startGess.innerHTML = 'Start guessing...';
    scoree.innerHTML = '💯 Score:';
    hs.innerHTML = '🥇 Highscore:';
    sp.innerHTML = '0';
    sp2.innerHTML = '20';
  }
}*/
