"use strict";
//game logic
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function(message){
  document.querySelector(".message").textContent = message
}
document.querySelector(".check-btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-input").value);
  if (!guess) {
    displayMessage("⛔ No Number")
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct number")
    document.querySelector(".number").textContent = secretNumber;
  } else if (guess > secretNumber + 2) {
    displayMessage("Too High!")
  } else if (guess === secretNumber + 2 || guess === secretNumber + 1) {
    displayMessage("A bit lower!")
  } else if (guess < secretNumber - 2) {
    displayMessage("Too Low!")
  } else if (guess === secretNumber - 2 || guess === secretNumber - 1) {
    displayMessage("A bit Higher!")
  }

  if (guess != secretNumber && guess != 0 && guess) {
    score--;
  }

  if (score === 0) {
    displayMessage("💥 You have lost, Try again!")
    document.querySelector("body").style.backgroundColor = "#ff0000";
  }
  document.querySelector(".score").textContent = score;

  if (guess === secretNumber) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;

    }
  }
});
document.addEventListener("keydown", function(e){
  if(e === "Enter"){
      const guess = Number(document.querySelector(".guess-input").value);
      if (!guess) {
        displayMessage("⛔ No Number");
      } else if (guess === secretNumber) {
        displayMessage("🎉 Correct number")
        document.querySelector(".number").textContent = secretNumber;
      } else if (guess > secretNumber + 2) {
        displayMessage("Too High!")
      } else if (guess === secretNumber + 2 || guess === secretNumber + 1) {
        displayMessage("A bit lower!")
      } else if (guess < secretNumber - 2) {
        displayMessage("Too Low!")
      } else if (guess === secretNumber - 2 || guess === secretNumber - 1) {
        displayMessage("A bit Higher!")
      }
    
      if (guess != secretNumber && guess != 0 && guess) {
        score--;
      }
    
      if (score === 0) {
        displayMessage("💥 You have lost, Try again!")
        document.querySelector("body").style.backgroundColor = "#ff0000";
      }
      document.querySelector(".score").textContent = score;
    
      if (guess === secretNumber) {
        document.querySelector("body").style.backgroundColor = "#60b347";
        if (score > highscore) {
          highscore = score;
          document.querySelector(".highscore").textContent = highscore;
    
        }
      }
  }
})

document.querySelector(".again-btn").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#202020";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".guess-input").value = "";
  displayMessage("Start Guessing...")
});
