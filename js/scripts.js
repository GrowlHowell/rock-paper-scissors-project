let getComputerChoice = function() {
    let choice = Math.floor((Math.random() * 3)) + 1;
    switch(choice) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "Didn't work!";
    }
}