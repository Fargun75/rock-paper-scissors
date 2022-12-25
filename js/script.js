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

let playerInput = prompt("You choose - Rock, Paper or Scissors? :");
let playerFirstletter = playerInput.slice(0,1);
let playerRestletters = playerInput.slice(1);
let playerChoice = playerFirstletter.toUpperCase() + playerRestletters.toLocaleLowerCase();

console.log(playerChoice);




