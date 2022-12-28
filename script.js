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
            return { player: 0, computer: 0 };
        } else if (computerSelection == 'paper') {
            return { player: 0, computer: 1 };
        } else {
            return { player: 1, computer: 0 };
        }
    }

    //cases when player plays paper
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return { player: 1, computer: 0 };
        } else if (computerSelection == 'paper') {
            return { player: 0, computer: 0 }
        } else {
            return { player: 0, computer: 1 };
        }
    }

    //cases when player plays scissors
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return { player: 0, computer: 1 };
        } else if (computerSelection == 'paper') {
            return { player: 1, computer: 0 };
        } else {
            return { player: 0, computer: 0 };
        }
    }

    //cases when input is wrong
    else {
        return 'Wrong input, please enter Rock, Paper, or Scissors.';
    }
}

function game() {

    let playerCount = 0; 
    let computerCount = 0;

    for (let i = 0; i < 5; i++) {

        const playerSelection = 'rock';
        const computerSelection = getComputerChoice();
        const round = playRound(playerSelection, computerSelection);

        //playerCount increases by 1 every time player wins
        playerCount += round.player;

        //computerCount increases by 1 every time computer wins
        computerCount += round.computer;

        //log the current score of each round
        console.log(`player: ${playerCount} computer: ${computerCount}`)
    }

    //find the winner of the 5 rounds and log it on screen
    if (playerCount > computerCount) {
        console.log('player wins');
    } else if (playerCount < computerCount) {
        console.log('computer wins');
    } else {
        console.log('tie');
    }
}
  
game();