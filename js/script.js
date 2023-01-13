function getComputerChoice () {
    let number = Math.floor(Math.random() * 3);
        if (number == 0) {
        return ("Rock");
        
    } else if (number == 1) {
        return ("Paper");

    } else if (number == 2) {
        return ("Scissors");
    }
}

let computerSelection = getComputerChoice();


let playerInput = prompt("You choose - Rock, Paper or Scissors? :");
let playerFirstletter = playerInput.slice(0,1);
let playerRestletters = playerInput.slice(1);
let playerSelection = playerFirstletter.toUpperCase() + playerRestletters.toLocaleLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return ("It is a draw!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return ("You loose! Paper beats Rock");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return ("You win! Rock beats scissors!");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return ("You win! Paper beats Rock");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return ("You loose! Scissors beats Paper");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return ("You loose! Rock beats Scissors"); 
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return ("You win! Scissors beats Paper");
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return("It is a draw!");
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return("It is a draw!");
    
    } 

}
console.log("The computer selected: " + computerSelection);
console.log("You selected: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));



