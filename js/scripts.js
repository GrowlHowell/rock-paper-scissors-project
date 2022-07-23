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

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();
console.log("The computer chose " + computerChoice);
console.log("The player chose " + playerChoice);

if (computerChoice === "rock" && playerChoice === "rock") {
    console.log("It's a tie.");
} else if (computerChoice === "rock" && playerChoice === "paper") {
    console.log("The player wins!");
} else if (computerChoice === "rock" && playerChoice === "scissors") {
    console.log("The computer wins!");
} else if (computerChoice === "paper" && playerChoice === "rock") {
    console.log("The computer wins!");
} else if (computerChoice === "paper" && playerChoice === "paper") {
    console.log("It's a tie.");
} else if (computerChoice === "paper" && playerChoice === "scissors") {
    console.log("The player wins!");
} else if (computerChoice === "scissors" && playerChoice === "rock") {
    console.log("The player wins!");
} else if (computerChoice === "scissors" && playerChoice === "paper") {
    console.log("The computer wins!");
} else if (computerChoice === "scissors" && playerChoice === "scissors") {
    console.log("It's a tie.");
} else {
    console.log("Something didn't work right.");
}