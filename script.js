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

let computerSelection = getComputerChoice()

// this function plays a single round
function playRound(playerSelection, computerSelection) {

    //cases when player plays rock
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return 'tie';
        } else if (computerSelection == 'paper') {
            return 'computer wins'
        } else {
            return 'player wins'
        }
    }

    //cases when player plays paper
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'player wins';
        } else if (computerSelection == 'paper') {
            return 'tie'
        } else {
            return 'computer wins'
        }
    }

    //cases when player plays scissors
    else {
        if (computerSelection == 'rock') {
            return 'computer wins';
        } else if (computerSelection == 'paper') {
            return 'player wins'
        } else {
            return 'tie'
        }
    }
}

console.log(playRound('rock', computerSelection))