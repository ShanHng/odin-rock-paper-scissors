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

function playRound(playerSelection, computerSelection) {
    // your code here!
    
    // parse both player's and computer's input 
    const playerSelectionLowerCase = playerSelection.toLowerCase();
    const computerSelectionLowerCase = computerSelection.toLowerCase();

    // process inputs of game. main logic of the game goes here
    // store outcome of game in a variable. outcome of game is either 1, 0 or -1.
    let outcome;
    switch (playerSelectionLowerCase) {
        case("rock"):
            outcome = computerSelectionLowerCase === "rock" 
            ? 0 : (computerSelectionLowerCase === "scissors" ? 1 : -1)
            break;

        case("paper"):
            outcome = computerSelectionLowerCase === "paper" 
            ? 0 : (computerSelectionLowerCase === "rock" ? 1 : -1)
            break;

        case("scissors"):
            outcome = computerSelectionLowerCase === "scissors" 
            ? 0 : (computerSelectionLowerCase === "paper" ? 1 : -1)
            break;
    }

    // return message corresponding to game scenario
    formattedPlayerSelection = playerSelectionLowerCase.charAt(0).toUpperCase() + playerSelectionLowerCase.slice(1);
    formattedComputerSelection = computerSelectionLowerCase.charAt(0).toUpperCase() + computerSelectionLowerCase.slice(1);
    const MESSAGE_WIN = `You win! ${formattedPlayerSelection} beats ${formattedComputerSelection}`  
    const MESSAGE_DRAW = `A draw. Computer chose ${formattedComputerSelection}. Try again!`
    const MESSAGE_LOSE = `You lose! ${formattedComputerSelection} beats ${formattedPlayerSelection}`  
    switch(outcome) {
        case 0:
            return MESSAGE_DRAW;

        case -1:
            return MESSAGE_LOSE;

        case 1:
            return MESSAGE_WIN;

    }
}
   
