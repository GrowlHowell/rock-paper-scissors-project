const getComputerChoice = function() {
    let choice = Math.floor((Math.random() * 3)) + 1;
    switch(choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "Didn't work!";
    }
}

const getPlayerChoice = function() {
    let choice = prompt("What is your choice?").toLowerCase();
    return choice;
}

let computerScore = 0;
let playerScore = 0;

const game = function() {
    // for (i = 0; i < 10; i++) {
    //     playRound();
    //     if (computerScore === 3) {
    //         alert("The computer wins the match.");
    //         break;
    //     } else if (playerScore === 3) {
    //         alert("The player wins the match!");
    //         break;
    //     } else {
    //         console.log("No winner determined.");
    //     }
    // }
}

let playerChoice;
let computerChoice;
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const tally = document.getElementById('tally');
const lastRound = document.getElementById('last-round');

function playRound() {
    // let playerChoice = getPlayerChoice();
    // let computerChoice = getComputerChoice();
    if (computerChoice === "rock" && playerChoice === "rock") {
        lastRound.innerText = "It's a tie.";
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        lastRound.innerText = "The player wins!";
        return playerScore++;
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        lastRound.innerText = "The computer wins!";
        return computerScore++;
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        lastRound.innerText = "The computer wins!";
        return computerScore++;
    } else if (computerChoice === "paper" && playerChoice === "paper") {
        lastRound.innerText = "It's a tie.";
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        lastRound.innerText = "The player wins!";
        return playerScore++;
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        lastRound.innerText = "The player wins!";
        playerScore++;
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        lastRound.innerText = "The computer wins!";
        return computerScore++;
    } else if (computerChoice === "scissors" && playerChoice === "scissors") {
        lastRound.innerText = "It's a tie.";
    } else {
        console.log("Something didn't work right.");
    }
}

rockButton.addEventListener('click', function() {
    if (playerScore >= 5 || computerScore >= 5) {
        return;
    }
    playerChoice = 'rock';
    computerChoice = getComputerChoice();
    playRound();
    if (playerScore == 5) {
        tally.innerText = "The player wins the match!";
        lastRound.innerText = "";
    } else if (computerScore == 5) {
        tally.innerText = "The computer wins the match!";
        lastRound.innerText = "";
    } else {
        tally.innerText = `Computer: ${computerScore} : Player: ${playerScore}`;
    }
});
paperButton.addEventListener('click', function() {
    if (playerScore >= 5 || computerScore >= 5) {
        return;
    }
    playerChoice = 'paper';
    computerChoice = getComputerChoice();
    playRound();
    if (playerScore == 5) {
        tally.innerText = "The player wins the match!";
        lastRound.innerText = "";
    } else if (computerScore == 5) {
        tally.innerText = "The computer wins the match!";
        lastRound.innerText = "";
    } else {
        tally.innerText = `Computer: ${computerScore} : Player: ${playerScore}`;
    }
});
scissorsButton.addEventListener('click', function() {
    if (playerScore >= 5 || computerScore >= 5) {
        return;
    }
    playerChoice = 'scissors';
    computerChoice = getComputerChoice();
    playRound();
    if (playerScore == 5) {
        tally.innerText = "The player wins the match!";
        lastRound.innerText = "";
    } else if (computerScore == 5) {
        tally.innerText = "The computer wins the match!";
        lastRound.innerText = "";
    } else {
        tally.innerText = `Computer: ${computerScore} : Player: ${playerScore}`;
    }
});