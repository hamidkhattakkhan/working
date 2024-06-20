let boxs = document.querySelectorAll(".boxs");
// Select the reset button
let resetButton = document.querySelector(".reset");

let turnO = true; // Represents whose turn it is (true for O, false for X)
let moves = 0; // Track number of moves

const winPatterns = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // top-left to bottom-right diagonal
    [2, 4, 6]  // top-right to bottom-left diagonal
];

// Add click event listeners to each box
boxs.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.textContent === "") { // Check if the box is empty
            if (turnO) {
                box.textContent = "O";
            } else {
                box.textContent = "X";
            }
            turnO = !turnO; // Toggle turns

            moves++;
            if (moves >= 5) { // Minimum moves required to check for a win
                checkForWin();
            }
        }
    });
});

// Reset button functionality
resetButton.addEventListener("click", () => {
    boxs.forEach(box => {
        box.textContent = ""; // Clear text content of all boxes
    });
    turnO = true; // Reset turn to O
    moves = 0; // Reset moves counter
});

// Function to check for a win
function checkForWin() {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (boxs[a].textContent !== "" &&
            boxs[a].textContent === boxs[b].textContent &&
            boxs[b].textContent === boxs[c].textContent) {
                alert(`${boxs[a].textContent} wins!`);
                resetGame();
                return;
            }
    }
    if (moves === 9) {
        alert("It's a draw!");
        resetGame();
    }
}

// Function to reset the game
function resetGame() 
    boxs.forEach(box => {
        box.textContent = ""; // Clear text content of all boxes
    });
    turnO = true; // Reset turn to O
    moves = 0; // Reset moves counter