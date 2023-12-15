

function getComputerChoice() {
    let randomSelection = Math.floor(Math.random () * 3) + 1;
    switch (randomSelection) {
        case 1:
            return 'ROCK';
        case 2:
            return 'PAPER';
        case 3:
            return 'SCISSORS';
    }
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return "You Lose! Paper beats Rock,"; 
        } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
            return "You win! Rock beats Scissors."; 
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
            return "You win! Scissors beats Paper."; 
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
            return "You Lose! Rock beats Scissors.";
        } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
            return "You win! Paper beats Rock.";
        } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
            return "You Lose! Scissors beats Paper.";
        } else {
            return "It's a TIE!";
        }   
    }

const playerSelection = 'ROCK';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));