//random integer generator
function randomGen(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// this function returns either rock, paper or scissors randomly
function getComputerChoice() {
    let randint = randomGen(1,3);
    if (randint == 1) {
        return 'rock';
    } else if (randint == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// this function plays a single round
function playRound(playerSelection, computerSelection) {

    //cases when player plays rock
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return { message: 'It\'s a tie!', player: 0, computer: 0 };
        } else if (computerSelection == 'paper') {
            return { message: 'You lose! Rock loses to Paper!', player: 0, computer: 1 };
        } else {
            return { message: 'You win! Rock beats Scissors!', player: 1, computer: 0 };
        }
    }

    //cases when player plays paper
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You win! Paper beats Rock!';
        } else if (computerSelection == 'paper') {
            return 'It\'s a tie!';
        } else {
            return 'You lose! Paper loses to Scissors!';
        }
    }

    //cases when player plays scissors
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'You lose! Scissors lose to Rock!';
        } else if (computerSelection == 'paper') {
            return 'You win! Scissors beat Paper!';
        } else {
            return 'It\'s a tie!';
        }
    }

    //cases when input is wrong
    else {
        return 'Wrong input, please enter Rock, Paper, or Scissors.';
    }
}

// player and computer choices
// const playerSelection = prompt('What do you want to play?').toLowerCase();



// log the result of the round
//console.log(playRound(playerSelection, computerSelection).player);

let playerCount = 0; 
let computerCount = 0;

for (let i = 0; i < 5; i++) {

    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();

    //playerCount increases by 1 every time player wins
    playerCount += playRound(playerSelection, computerSelection).player;

    //computerCount increases by 1 every time computer wins
    computerCount += playRound(playerSelection, computerSelection).computer;
    

 }
  
 console.log(`playerCount: ${playerCount}`);
 console.log(`computerCount: ${computerCount}`);