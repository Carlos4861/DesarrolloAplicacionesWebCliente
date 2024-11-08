let display = document.getElementById("display");
let currentNumber = "";
let previousNumber = "";
let operation = undefined;

function appendNumber(number) {
    if (number === "." && currentNumber.includes(".")) return;
    currentNumber = currentNumber.toString() + number.toString();
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentNumber || "0";
}

function chooseOperation(op) {
    if (currentNumber === "") return;
    if (previousNumber !== "") calculate();
    operation = op;
    previousNumber = currentNumber;
    currentNumber = "";
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result;
    operation = undefined;
    previousNumber = "";
    updateDisplay();
}

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operation = undefined;
    updateDisplay();
}
