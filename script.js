// Select DOM elements
let gridSquareAmount = document.querySelector(".grid-square-amount");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let black = document.querySelector(".black");
let color = document.querySelector(".color");
let resetButton = document.querySelector(".reset-button");
let gridContainer = document.querySelector(".grid-container");

// Increase or decrease square amount between 2 and 100
let squares = 16;
const minSquares = 2;
const maxSquares = 100;
let isMouseDown = false;
let isColor = "Black"; 

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

function isColorBlack() {
    isColor = "Black";
    black.disabled = true;
    color.disabled = false;
}

function isColorColor() {
    isColor = "Color";
    color.disabled = true;
    black.disabled = false;
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid() {
    gridContainer.innerHTML = "";
    let squareSize = 100 / squares + "%";

    for (let i = 0; i < squares * squares; i++) {
        let gridContainerSquare = document.createElement("div");
        gridContainerSquare.classList.add("grid-container-square");
        gridContainerSquare.style.width = squareSize;
        gridContainerSquare.style.height = squareSize;
        gridContainerSquare.hoverCount = 0;

        gridContainerSquare.addEventListener("mouseover", function () {
            if (isColor === "Color") {
                gridContainerSquare.style.background = getRandomColor();
            } else {
                gridContainerSquare.hoverCount++;

                let opacity = Math.min(gridContainerSquare.hoverCount / 10, 1);
                gridContainerSquare.style.background = `rgba(0, 0, 0, ${opacity})`;
            }

            if (isMouseDown) {
                gridContainerSquare.style.background = isColor === "Color" ? getRandomColor() : "black";
            }
        });

        gridContainer.appendChild(gridContainerSquare);
    }
}


function initializeGrid() {
    createGrid();
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

// Event listeners for mouse press
document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

// Event listeners
plus.addEventListener("click", increaseSquares);
minus.addEventListener("click", decreaseSquares);
black.addEventListener("click", isColorBlack);
color.addEventListener("click", isColorColor);
resetButton.addEventListener("click", resetGrid);
