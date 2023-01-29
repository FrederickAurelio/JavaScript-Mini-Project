const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("statusText");
const restartBtn = document.getElementById("restartBtn");

let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let currentPlayer = "X";
let options = ["", "", "", "", "", "", "", "", ""];
let running = true;

initializeGame();

function initializeGame() {
    cells.forEach(function (cell) {
        cell.addEventListener("click", cellClicked)
    });
    statusText.textContent = `${currentPlayer}'s turn`;
    restartBtn.onclick = restartGame;
}

function cellClicked() {
    let cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] == "" && running) {
        updateCell(cellIndex, this);
        checkWinner();
    }
}

function updateCell(index, cell) {
    cell.textContent = currentPlayer;
    options[index] = currentPlayer;
}

function checkWinner() {
    let roundWon = false;
    for (i = 0; i < winConditions.length; i++) {
        let condition = winConditions[i];
        let cellA = options[condition[0]];
        let cellB = options[condition[1]];
        let cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        running = false;
        statusText.textContent = `${currentPlayer}'s Win!`;
    }
    else if (!options.includes("")) {
        statusText.textContent = `Draw!`;
    }
    else {
        changePlayer();
    }
}

function changePlayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O";
        statusText.textContent = `${currentPlayer}'s turn`;
    } else {
        currentPlayer = "X";
        statusText.textContent = `${currentPlayer}'s turn`;
    }
}

function restartGame() {
    currentPlayer = "X";
    running = true;
    options = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
    statusText.textContent = `${currentPlayer}'s turn`;
}