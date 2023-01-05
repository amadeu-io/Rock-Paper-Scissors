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

// plays a round and adds result to score (getScore.player, getScore.computer)
function getScore(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        // Tie. Do nothing. Having a dedicated 'if' for tie allows for code to be shorter
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors' || 
    playerSelection == 'Paper' && computerSelection == 'Rock' ||
    playerSelection == 'Scissors' && computerSelection == 'Paper') {
        player += 1; // win
    } else {
        computer += 1; // loss
    }
    return {player, computer}
}

// recieves score and returns ending message when 5 points are reached
function endGame(player, computer) {
    if (player >= 5) {
        return 'Player Wins!';
    } if (computer >= 5) {
        return 'Computer Wins!';
    } else {
        return false; // returns false as long as the game keeps going
    }
}

// executes the game
let game = function playGame() {

    let playerChoice = event.target.className; // equals the clicked event ('rock', 'paper'...)
    let computerChoice = getComputerChoice();
    let score = getScore(playerChoice, computerChoice); 

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
    if (endGame(score.player, score.computer)) { 
        const div_score = document.querySelector('.score');
        const div_choices = document.querySelector('.choices')
        div_choices.innerHTML = '';
        div_score.innerHTML = `
        ${endGame(score.player, score.computer)} ${score.player} - ${score.computer}`;
        div_score.classList.remove('score'); // score-end centers the ending message
        div_score.classList.add('score-end');
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



