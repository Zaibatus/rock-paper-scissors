

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

function singleRound (playerSelection, computerSelection) {

    playerSelection.toUpperCase;

    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return "You Lose! Paper beats Rock"; 
    }
}

console.log(singleRound("ROCk","PAPER"));