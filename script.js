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

function updateMoves(playerSelection, computerSelection) {
    playerMoveDisplay.textContent = `You selected ${playerSelection}.`
    compMoveDisplay.textContent = `Computer selected ${computerSelection}.`
}

function isGameEnd() {
    return playerScore >=5 || compScore >= 5;
}

function decideRoundWinner(playerSelection, computerSelection) {
    switch (playerSelection) {
        case("Rock"):
            return computerSelection === "Rock" 
            ? 0 : (computerSelection === "Scissors" ? 1 : -1)
            break;

        case("Paper"):
            return computerSelection === "Paper" 
            ? 0 : (computerSelection === "Rock" ? 1 : -1)
            break;

        case("Scissors"):
            return computerSelection === "Scissors" 
            ? 0 : (computerSelection === "Paper" ? 1 : -1)
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    
    updateMoves(playerSelection, computerSelection);

    // store outcome of game in a variable. outcome of game is either 1, 0 or -1.
    let outcome = decideRoundWinner(playerSelection, computerSelection);

    roundOutcomeDisplay.textContent = getRoundOutcomeMessage(outcome, playerSelection, computerSelection);
    
    updateScore(outcome);

    if (isGameEnd()) endGame();

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
   
function endGame() {
    const MESSAGE_WIN_GAME = 'You won the game!';
    const MESSAGE_LOSE_GAME = 'You lost the game :<<'

    gameInstruction.textContent = "Game has ended! " + 
        ((playerScore > compScore) ? MESSAGE_WIN_GAME : MESSAGE_LOSE_GAME);
    buttons.forEach(button => button.disabled = true);
}

let playerScore = 0;
let compScore = 0;

const playerMoveDisplay = document.querySelector(".player-move");
const compMoveDisplay = document.querySelector(".comp-move");
const roundOutcomeDisplay = document.querySelector(".round-outcome");

const playerScoreDisplay = document.querySelector(".player-score");
const compScoreDisplay = document.querySelector(".comp-score");

const gameInstruction = document.querySelector(".instr");

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function (e) {
    const roundOutcome = playRound(this.className, getComputerChoice());
}))



