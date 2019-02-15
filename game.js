const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
  console.log(e.target.innerText)
  let computerSelection = Math.random();
  if (computerSelection < 0.34) {
    computerSelection = "Pikachu";
  } else if (computerSelection <= 0.67) {
    computerSelection = "Squirtle";
  } else {
    computerSelection = "Charmander";
  }
  console.log(computerSelection);
}