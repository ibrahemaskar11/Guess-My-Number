"use strict";

const againBtn = document.querySelector(".btn__again");
const checkBtn = document.querySelector(".btn__check");
const numberPlacement = document.querySelector(".number");
const inputBox = document.querySelector(".input__container");
const message = document.querySelector(".message");
const scoreContainer = document.querySelector(".score__value");
const highScoreContainer = document.querySelector(".highscore__value");

const rand = () => Math.floor(Math.random() * 21);
const displayMessage = function (_message) {
  message.textContent = _message;
};
let secretNumber = rand();
let highScore = 0;
let score = 20;
console.log(secretNumber);

const checkFun = function () {
  let guess = inputBox.value;
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (parseInt(guess) === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    numberPlacement.textContent = guess;
    if (score > highScore) {
      highScore = score;
      highScoreContainer.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      scoreContainer.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreContainer.textContent = 0;
    }
  }
};
const againFun = function () {
  score = 20;
  secretNumber = rand();
  scoreContainer.textContent = 0;
  displayMessage("Start guessing...");
  numberPlacement.textContent = "?";
  inputBox.value = "";
  document.querySelector("body").style.backgroundColor = "#222";
};
checkBtn.addEventListener("click", checkFun);
againBtn.addEventListener("click", againFun);
