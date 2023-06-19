function getComputerChoice() {
    // generate a random number from 1 - 3
    const ONE_THIRD_VALUE = 1 / 3;
    const randomNumber = Math.random();
    const randomNumberInRange = (randomNumber <= ONE_THIRD_VALUE) ? 1 : (randomNumber <= 2 * ONE_THIRD_VALUE) ? 2 : 3;  
    // based on number generated return either Rock, Paper, Scissors
    switch(randomNumberInRange) {
        case 1:
            return "Rock";
            break;

        case 2:
            return "Paper";
            break;
            
        case 3:
            return "Scissors";
    }
}

function updateScore(outcome) {
    switch(outcome) {
        case 1: 
            playerScore += 1;
            break;
        case -1:
            compScore += 1;
            break;
        case 0:
            // do nothing 
    }

    playerScoreDisplay.textContent = `Your score: ${playerScore}`;
    compScoreDisplay.textContent = `PC's score: ${compScore}`;
}

function playRound(playerSelection, computerSelection) {
    // display both player and computer selection
    playerMoveDisplay.textContent = `You selected ${playerSelection}.`
    compMoveDisplay.textContent = `Computer selected ${computerSelection}.`

    // process inputs of game. main logic of the game goes here
    // store outcome of game in a variable. outcome of game is either 1, 0 or -1.
    let outcome;
    switch (playerSelection) {
        case("Rock"):
            outcome = computerSelection === "Rock" 
            ? 0 : (computerSelection === "Scissors" ? 1 : -1)
            break;

        case("Paper"):
            outcome = computerSelection === "Paper" 
            ? 0 : (computerSelection === "Rock" ? 1 : -1)
            break;

        case("Scissors"):
            outcome = computerSelection === "Scissors" 
            ? 0 : (computerSelection === "Paper" ? 1 : -1)
            break;
    }

    roundOutcomeDisplay.textContent = getRoundOutcomeMessage(outcome, playerSelection, computerSelection);
    updateScore(outcome);

    return outcome;
}

function getRoundOutcomeMessage(outcome, playerSelection, computerSelection) {
    // return message corresponding to game scenario
    const MESSAGE_WIN = `You win! ${playerSelection} beats ${computerSelection}`  
    const MESSAGE_DRAW = `A draw. Computer chose ${computerSelection}. Try again!`
    const MESSAGE_LOSE = `You lose! ${computerSelection} beats ${playerSelection}`  
    switch(outcome) {
        case 0:
            return MESSAGE_DRAW;

        case -1:
            return MESSAGE_LOSE;

        case 1:
            return MESSAGE_WIN;

    }
}
   
function getGameOutcomeMessage(outcome) {
    const MESSAGE_WIN_GAME = 'You won the game!';
    const MESSAGE_DRAW_GAME = 'It\'s a draw!';
    const MESSAGE_LOSE_GAME = 'You lost the game :<<'
    
    return (outcome > 0) ? MESSAGE_WIN_GAME
    : (outcome < 0) ? MESSAGE_LOSE_GAME : MESSAGE_DRAW_GAME;

}

function game() {
    let gameOutcome = 0;
    console.log("Rock Paper Scissors! There will be five rounds.")

    // for(let i = 0; i < 5; i++) {
    //     console.log(`Round ${i + 1}`);
        const playerMove = prompt("What is your move?");
        const computerMove = getComputerChoice();
        const roundOutcome = playRound(playerMove, computerMove);
        const roundOutcomeMessage = getRoundOutcomeMessage(roundOutcome, playerMove, computerMove);
        console.log(roundOutcomeMessage);
        gameOutcome += roundOutcome;
    // }

    console.log(`Game has ended. ${getGameOutcomeMessage(gameOutcome)}`); 
}


const playerMoveDisplay = document.querySelector(".player-move");
const compMoveDisplay = document.querySelector(".comp-move");
const roundOutcomeDisplay = document.querySelector(".round-outcome");

let playerScore = 0;
let compScore = 0;
const playerScoreDisplay = document.querySelector(".player-score");
const compScoreDisplay = document.querySelector(".comp-score");

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function (e) {
    playerMove = this.className;
    compMove = getComputerChoice();
    const roundOutcome = playRound(this.className, getComputerChoice());
    console.log(roundOutcome);
}))



