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

const game = function() {
    let computerScore = 0;
    let playerScore = 0;
    const playRound = function() {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        if (computerChoice === "rock" && playerChoice === "rock") {
            console.log("It's a tie.");
        } else if (computerChoice === "rock" && playerChoice === "paper") {
            console.log("The player wins!");
            return playerScore++;
        } else if (computerChoice === "rock" && playerChoice === "scissors") {
            console.log("The computer wins!");
            return computerScore++;
        } else if (computerChoice === "paper" && playerChoice === "rock") {
            console.log("The computer wins!");
            return computerScore++;
        } else if (computerChoice === "paper" && playerChoice === "paper") {
            console.log("It's a tie.");
        } else if (computerChoice === "paper" && playerChoice === "scissors") {
            console.log("The player wins!");
            return playerScore++;
        } else if (computerChoice === "scissors" && playerChoice === "rock") {
            console.log("The player wins!");
            playerScore++;
        } else if (computerChoice === "scissors" && playerChoice === "paper") {
            console.log("The computer wins!");
            return computerScore++;
        } else if (computerChoice === "scissors" && playerChoice === "scissors") {
            console.log("It's a tie.");
        } else {
            console.log("Something didn't work right.");
        }
    }
    for (i = 0; i < 10; i++) {
        playRound();
        if (computerScore === 3) {
            alert("The computer wins the match.");
            break;
        } else if (playerScore === 3) {
            alert("The player wins the match!");
            break;
        } else {
            console.log("No winner determined.");
        }
    }
}