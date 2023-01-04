// random integer generator
function randomGen(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// returns either rock, paper or scissors randomly
function getComputerChoice() {
    let randint = randomGen(1,3);
    if (randint == 1) {
        return 'Rock';
    } else if (randint == 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// plays a single round and returns w, l or t
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 't'; // tie
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors' || 
    playerSelection == 'Paper' && computerSelection == 'Rock' ||
    playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'w'; // win
    } else {
        return 'l'; // loss
    }
}

// receives w, l or t and returns {playerCount: 1, computerCount: 2} ...
function countScore(round_result) {
    if (round_result == 'w') {
        player += 1;
    } else if (round_result == 'l') {
        computer += 1;
    }
    return { player, computer };
}

// recieves score and returns ending message when 5 points are reached
function endGame(player, computer) {
    if (player >= 5) {
        return 'Player Wins!';
    } if (computer >= 5) {
        return 'Computer Wins!';
    } else {
        return false; // it returns false as long as the game keeps going
    }
}

// executes the game
let game = function playGame() {

    let playerChoice = event.target.className; // equals the clicked event ('rock', 'paper'...)
    let computerChoice = getComputerChoice(); // random computer choice
    let round = playRound(playerChoice, computerChoice); // w, l or t
    let score = countScore(round); // {player: , computer: }
 
    // show score to page
    const playerScore = document.querySelector('.playerScore');
    playerScore.innerHTML = score.player; 
    const computerScore = document.querySelector('.computerScore');
    computerScore.innerHTML = score.computer; 

    // show player & computer choices
    const playerChoiceNode = document.querySelector('.playerChoice');
    playerChoiceNode.innerHTML = playerChoice; 
    const vs = document.querySelector('.vs');
    vs.innerHTML = 'vs.';
    const computerChoiceNode = document.querySelector('.computerChoice');
    computerChoiceNode.innerHTML = computerChoice; 

    // executes when game ends
    if (endGame(score.player, score.computer)) { // endGame will return false as long as the game is on
        const div_score = document.querySelector('.score');
        div_score.innerHTML = endGame(score.player, score.computer);
    };

};

// start of the program
let player = 0; // initial scores
let computer = 0;

const Rock = document.querySelector('.Rock');
Rock.addEventListener('click', game);

const Paper = document.querySelector('.Paper');
Paper.addEventListener('click', game);

const Scissors = document.querySelector('.Scissors');
Scissors.addEventListener('click', game);



