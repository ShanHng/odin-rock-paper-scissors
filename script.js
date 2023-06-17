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