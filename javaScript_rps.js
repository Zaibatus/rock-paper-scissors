let playerScore = 0;
let computerScore = 0;

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

    if (playerSelection === 'ROCK' && computerSelection === 'PAPER' || 
    playerSelection === 'SCISSORS' && computerSelection === 'PAPER' || 
    playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        computerScore++;
        console.log(`Your score is: ${playerScore}`);
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ||
              playerSelection === 'SCISSORS' && computerSelection === 'PAPER' || 
              playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        playerScore++;
        console.log(`Your score is: ${playerScore}`);
    } else {
        console.log("You tied! Nobody wins.");
        }   
    }

    function gameSelection() {
        let playerChoice = prompt('Make your selection','');
        playerChoice = playerChoice.toUpperCase();
        computerSelection = getComputerChoice();
        playerSelection = playerChoice;
    }

    function game() {

        gameSelection()
        playRound (playerSelection, computerSelection);
        gameSelection();

        playRound (playerSelection, computerSelection);
        gameSelection();

        playRound (playerSelection, computerSelection);
        gameSelection();

        playRound (playerSelection, computerSelection);
        gameSelection();

        playRound (playerSelection, computerSelection);

        if (playerScore > computerScore) {
            console.log("You win the game!")
        } else if (playerScore === computerScore) {
            console.log("It's a TIE, nobody win!")
        } else {
            console.log("Computer win the game");
        }
    }

game();
