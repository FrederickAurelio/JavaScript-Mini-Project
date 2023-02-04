'use strict';
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newBtn = document.querySelector(".btn--new");

const player1 = document.querySelector(".player--0");
const player1Score = document.querySelector("#score--0");
const player1Current = document.querySelector("#current--0")

const player2 = document.querySelector(".player--1");
const player2Score = document.querySelector("#score--1");
const player2Current = document.querySelector("#current--1")

const diceImg = document.querySelector(".dice");
let score = 0;

const newGame = function () {
    rollBtn.disabled = false;
    holdBtn.disabled = false;
    player1.classList.remove("player--winner");
    player2.classList.remove("player--winner");
    score = 0;
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1Current.textContent = 0;
    player2Current.textContent = 0;
    diceImg.src = "";
}
const changePlayer = function () {
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
}
const updateScore = function () {
    if (player1.classList.contains("player--active")) {
        let total = Number(player1Score.textContent);
        total += score;
        player1Score.textContent = total;
    } else {
        let total = Number(player2Score.textContent);
        total += score;
        player2Score.textContent = total;
    }
}
const resetCurrent = function () {
    score = 0;
    player1Current.textContent = score;
    player2Current.textContent = score;
}
const checkWinner = function () {
    const win = function () {
        diceImg.src = "";
        player1.classList.remove("player--active");
        player2.classList.remove("player--active");
        rollBtn.disabled = true;
        holdBtn.disabled = true;
    }
    let scorePlayer1 = Number(player1Score.textContent);
    let scorePlayer2 = Number(player2Score.textContent);
    if (scorePlayer1 >= 100) {
        win()
        player1.classList.add("player--winner");
    } else if (scorePlayer2 >= 100) {
        win()
        player2.classList.add("player--winner");
    }
}

newGame();
rollBtn.addEventListener("click", function () {
    const dice = Number(Math.floor(Math.random() * 6) + 1);
    diceImg.src = `dice-${dice}.png`;
    score += dice;
    if (dice === 1) {
        resetCurrent();
        changePlayer();
    } else {
        if (player1.classList.contains("player--active")) {
            player1Current.textContent = score;
        } else {
            player2Current.textContent = score;
        }
    }
});
holdBtn.addEventListener("click", function () {
    updateScore();
    resetCurrent();
    changePlayer();
    checkWinner();
});
newBtn.addEventListener("click", newGame);
