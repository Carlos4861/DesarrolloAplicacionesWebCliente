const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.getElementById('message');
const squares = document.querySelectorAll('.square');
const resetButton = document.getElementById('reset');
const modeButtons = document.querySelectorAll('.mode');

let numSquares = 6;
let colors = [];
let pickedColor;
 
init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
modeButtons.forEach(button => {
      button.addEventListener('click', function () {
        modeButtons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        numSquares = this.textContent === "Easy" ? 3 : 6;
        reset();
    });
  });
}

function setupSquares() {
squares.forEach((square, index) => {
    square.addEventListener('click', function () {
         const clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            resetButton.textContent = "Play Again?";
        } else {                this.style.backgroundColor = "#232323"; 
          messageDisplay.textContent = "Try Again";
         }
     });
  });
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";

    squares.forEach((square, index) => {
        if (colors[index]) {
            square.style.display = "block";
            square.style.backgroundColor = colors[index];
        } else {
            square.style.display = "none";
        }
    });
}

resetButton.addEventListener('click',reset);

function changeColors(color) {
    squares.forEach(square => {
        square.style.backgroundColor = color;
    });
}

function pickColor(color){
    const randomIndex = Math.floor(Math.random() * colors.length);
 return colors[randomIndex];
}

function generateRandomColors(num){
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


