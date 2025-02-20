// Select DOM elements
let gridSquareAmount = document.querySelector(".grid-square-amount");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let resetButton = document.querySelector(".reset-button");
let gridContainer = document.querySelector(".grid-container");

// Increase or decrease square amount between 2 and 100
let squares = 16;
const minSquares = 2;
const maxSquares = 100;

function updateDisplay() {
    gridSquareAmount.textContent = squares;
    plus.disabled = squares >= maxSquares;
    minus.disabled = squares <= minSquares;
}

function increaseSquares() {
    if (squares < maxSquares) {
        squares++;
        createGrid();
        updateDisplay();
    }
}

function decreaseSquares() {
    if (squares > minSquares) {
        squares--;
        createGrid();
        updateDisplay();
    }
}

function createGrid() {
    gridContainer.innerHTML = "";
    let squareSize = 100 / squares + "%";
    for (let i = 0; i < squares * squares; i++) {
        let gridContainerSquare = document.createElement("div");
        gridContainerSquare.classList.add("grid-container-square");
        gridContainerSquare.style.width = squareSize;
        gridContainerSquare.style.height = squareSize;
        gridContainer.appendChild(gridContainerSquare);

    }
};

function initializeGrid() {
    for (let i = 0; i < squares * squares; i++) {
        createGrid();
    }
    updateDisplay();
}

// Reset the grid back to 16x16
function resetGrid() {
    squares = 16;
    createGrid();
    updateDisplay();
}



// Initialize grid on page load
initializeGrid();

// Event listeners
plus.addEventListener("click", increaseSquares);
minus.addEventListener("click", decreaseSquares);
resetButton.addEventListener("click", resetGrid);
