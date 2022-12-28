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
            return 'It\'s a tie!';
        } else if (computerSelection == 'paper') {
            return 'You lose! Rock loses to Paper!'
        } else {
            return 'You win! Rock beats Scissors!'
        }
    }

    //cases when player plays paper
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You win! Paper beats Rock!';
        } else if (computerSelection == 'paper') {
            return 'It\'s a tie!'
        } else {
            return 'You lose! Paper loses to Scissors!'
        }
    }

    //cases when player plays scissors
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'You lose! Scissors lose to Rock!';
        } else if (computerSelection == 'paper') {
            return 'You win! Scissors beat Paper!'
        } else {
            return 'It\'s a tie!'
        }
    }

    //cases when input is wrong
    else {
        return 'Wrong input, please enter Rock, Paper, or Scissors.'
    }
}

// player and computer choices
const playerSelection = prompt('What do you want to play?').toLowerCase();
const computerSelection = getComputerChoice()

// log the result of the round
console.log(playRound(playerSelection, computerSelection));