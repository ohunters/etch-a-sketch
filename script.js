// Select DOM elements
let gridSquareAmount = document.querySelector(".grid-square-amount");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");

// Increase or decrease square amount between 2 and 100
let squares = 16;

function increaseSquares () {
    if (squares < 100) {
        squares++
        gridSquareAmount.textContent = squares;
    } else {
        plus.disabled = true;
    };
};

function decreaseSquares () {
    if (squares > 2) {
        squares--
        gridSquareAmount.textContent = squares;
    } else {
        minus.disabled = true;
    }

};

plus.addEventListener("click", increaseSquares);
minus.addEventListener("click", decreaseSquares);