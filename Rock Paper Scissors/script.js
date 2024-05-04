// --- OLD ---
// function play() {
//   const player1Choice = document.getElementById('player1Input').value.trim().toLowerCase();
//   const player2Choice = document.getElementById('player2Input').value.trim().toLowerCase();

//   // trim - removes any leading or trailing whitespace
//   // toLowerCase - converts to lowercase

//   if (!player1Choice || !player2Choice) {
//       document.getElementById('result-text').innerText = "Both players need to make a choice.";
//       return;
//   }
//   // checks if input is empty

//   if (!isValidChoice(player1Choice) || !isValidChoice(player2Choice)) {
//       document.getElementById('result-text').innerText = "Please enter valid choices: rock, paper, or scissors.";
//       return;
//   }
//   //checks if input is valid

//   let result;

//   if (player1Choice === player2Choice) {
//       result = "It's a tie!";
//   } else if (
//       (player1Choice === 'rock' && player2Choice === 'scissors') ||
//       (player1Choice === 'paper' && player2Choice === 'rock') ||
//       (player1Choice === 'scissors' && player2Choice === 'paper')
//   ) {
//       result = "Player 1 wins!";
//   } else {
//       result = "Player 2 wins!";
//   }

//   document.getElementById('result-text').innerText = `Player 1 chose ${player1Choice}, Player 2 chose ${player2Choice}. ${result}`;
// }

// function isValidChoice(choice) {
//   return ['rock', 'paper', 'scissors'].includes(choice);
// }

// --- NEW ---
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    updateScore(roundResult);
  });
});

function computerPlay() {
  // Generate random choice for computer
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  // Play one round of the game
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "win";
  } else {
    computerScore++;
    return "lose";
  }
}

function updateScore(result) {
  // Update score and display result
  const scoreElement = document.getElementById("score");
  const resultElement = document.getElementById("result");

  if (result === "win") {
    resultElement.textContent = "You win this round!";
  } else if (result === "lose") {
    resultElement.textContent = "You lose this round!";
  } else {
    resultElement.textContent = "It's a tie!";
  }

  scoreElement.textContent = `Score: Player - ${playerScore}, Computer - ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

function announceWinner() {
  // Announce the winner of the game
  const resultElement = document.getElementById("result");
  if (playerScore === 5) {
    resultElement.textContent = "Congratulations! You win the game!";
  } else {
    resultElement.textContent = "Oops! Computer wins the game!";
  }
  // Disable buttons after game ends
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
