const squares = document.getElementsByClassName("square");
const scoreMessage = document.querySelector(".score-message");
const resetBoardButton = document.querySelector(".reset-board");

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const players = ["X", "0"];
console.log("squares", squares);
let currentPlayer = players[0];
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        console.log("squares", squares[i]);
        const idValue = squares[i].getAttribute("id");
        const id = idValue.split("square").pop();
        console.log("idValue", id);
        console.log("index", i);
        if (squares[i].textContent !== "") {
            return;
        }
        // board[i][id] = currentPlayer
        squares[i].textContent = currentPlayer;
        checkWin(currentPlayer);
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
        // console.log("board", board)
    });
}

function checkWin(currentPlayer) {
    console.log("currentPlayer", currentPlayer);
    let hasWon = false
    for (let i of winningCombinations) {
        console.log("combination", i);
        if (
            squares[i[0]].textContent === currentPlayer &&
            squares[i[1]].textContent === currentPlayer &&
            squares[i[2]].textContent === currentPlayer
        ) {
            squares[i[0]].classList.add('strikethrough');
            squares[i[1]].classList.add('strikethrough');
            squares[i[2]].classList.add('strikethrough');
            scoreMessage.textContent = `${currentPlayer} wins!`;
            return hasWon = !hasWon;
        }
    }
    return hasWon;
}
resetBoardButton.addEventListener('click', function (e) {
    console.log("resetBoardButton")
    resetBoard()
})

function resetBoard() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
        squares[i].classList.remove('strikethrough');
    }
    scoreMessage.textContent = "";
}
