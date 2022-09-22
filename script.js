const allNumberButtons = document.querySelectorAll('.number');
const allOperatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelectorAll('.equals-button');
let currentNumberDisplay = document.getElementById("digital-numbers");
let currentResultDisplay = document.getElementById("digital-numbers-result");
currentNumberDisplay.innerHTML = 0;
let currentNumber = '';
let currentResult = '';
let currentExpression = '';
let currentOperator = '';
let number1 = '';
let number2 = '';

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clear);

allNumberButtons.forEach(element => {
    element.addEventListener('click', getNumber);
});

let processNumString = function(str) {
    let floatNum = parseFloat(str);
    let result = floatNum % 1 == 0 ? floatNum.toFixed(0) : floatNum.toFixed(1);
    return result;
}

function getNumber(e) {
    number = e.target.value;
    currentNumber += number;
    currentNumber = processNumString(currentNumber);

    if (currentNumber.length < 1) {
        currentNumberDisplay.innerHTML = number;
    } else {
        currentNumberDisplay.innerHTML = currentNumber;
    }    
}

function clear() {
    number = 0;
    currentNumberDisplay.innerHTML = 0;
    currentNumber = '';
    currentResult = '';
    currentResultDisplay.innerHTML = '';
}

allOperatorButtons.forEach(element => {
    element.addEventListener('click', processOperator);
});

function processOperator(e) {
    number1 = currentNumber;    
    currentOperator = e.target.value;
    clear();
    currentResultDisplay.innerHTML = `${number1} ${currentOperator}`;
}

equalsButton.forEach(element => {
    element.addEventListener('click', () => {
        number2 = currentNumber;
        if (currentOperator === '+') {
            currentNumber = parseFloat(number1) + parseFloat(number2);
            currentNumberDisplay.innerHTML = currentNumber;
            currentResultDisplay.innerHTML = currentNumber;
        } else if (currentOperator === '-') {
            currentNumber = parseFloat(number1) - parseFloat(number2);
            currentNumberDisplay.innerHTML = currentNumber;
            currentResultDisplay.innerHTML = currentNumber;
        } else if (currentOperator === '*') {
            currentNumber = parseFloat(number1) * parseFloat(number2);
            currentNumberDisplay.innerHTML = currentNumber;
            currentResultDisplay.innerHTML = currentNumber;
        } else if (currentOperator === '/') {
            currentNumber = parseFloat(number1) / parseFloat(number2);
            currentNumberDisplay.innerHTML = currentNumber;
            currentResultDisplay.innerHTML = currentNumber;
        }
    });
});