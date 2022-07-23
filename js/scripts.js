let getComputerChoice = function() {
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

let getPlayerChoice = function() {
    let choice = prompt("What is your choice?").toLowerCase();
    return choice;
}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
console.log("The computer chose " + computerChoice);
console.log("The player chose " + playerChoice);