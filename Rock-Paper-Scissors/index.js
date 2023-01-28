const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtn.forEach((button) => {
    button.onclick = () => {
        player = button.textContent;
        computerTurn();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = "Result: " + checkWinner();
    };
});
function computerTurn() {
    let random = Math.floor(Math.random() * 3) + 1;
    switch(random){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw!"
    }
    else if(computer == "ROCK" && player == "PAPER"){
        return "You Win!"
    }
    else if(computer == "PAPER" && player == "SCISSORS"){
        return "You Win!"
    }
    else if(computer == "SCISSORS" && player == "ROCK"){
        return "You Win!"
    }
    else {
        return "You Lose!"
    }
}