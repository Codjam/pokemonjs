const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
  let playerSelection = e.target.innerText
  let computerSelection = Math.random();
  if (computerSelection < 0.34) {
    computerSelection = "Pikachu";
  } else if (computerSelection <= 0.67) {
    computerSelection = "Squirtle";
  } else {
    computerSelection = "Charmander";
  }
  console.log(playerSelection, computerSelection);
  let result = checkWinner(playerSelection, computerSelection);
  console.log(result);
}

function checkWinner(pl, co) {
  if (pl === co) {
    return "Draw";
  }
  if (pl === "Pikachu") {
    if (co === "Squirtle") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (pl === "Squirtle") {
    if (co === "Charmander") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (pl === "Charmander") {
    if (co === "Pikachu") {
      return "Computer";
    } else {
      return "Player";
    }
  }
}