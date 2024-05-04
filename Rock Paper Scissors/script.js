function play() {
  const player1Choice = document.getElementById('player1Input').value.trim().toLowerCase();
  const player2Choice = document.getElementById('player2Input').value.trim().toLowerCase();

  // trim - removes any leading or trailing whitespace
  // toLowerCase - converts to lowercase

  if (!player1Choice || !player2Choice) {
      document.getElementById('result-text').innerText = "Both players need to make a choice.";
      return;
  }
  // checks if input is empty

  if (!isValidChoice(player1Choice) || !isValidChoice(player2Choice)) {
      document.getElementById('result-text').innerText = "Please enter valid choices: rock, paper, or scissors.";
      return;
  }
  //checks if input is valid

  let result;

  if (player1Choice === player2Choice) {
      result = "It's a tie!";
  } else if (
      (player1Choice === 'rock' && player2Choice === 'scissors') ||
      (player1Choice === 'paper' && player2Choice === 'rock') ||
      (player1Choice === 'scissors' && player2Choice === 'paper')
  ) {
      result = "Player 1 wins!";
  } else {
      result = "Player 2 wins!";
  }

  document.getElementById('result-text').innerText = `Player 1 chose ${player1Choice}, Player 2 chose ${player2Choice}. ${result}`;
}

function isValidChoice(choice) {
  return ['rock', 'paper', 'scissors'].includes(choice);
}
