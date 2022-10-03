const allNumberButtons = document.querySelectorAll('.number');
const allOperatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelectorAll('.equals-button');
let currentNumberDisplay = document.getElementById("digital-numbers");
let currentResultDisplay = document.getElementById("digital-numbers-result");
let backspaceButton = document.getElementById("backspace-button");
let changeSignButton = document.getElementById("plus-minus-button");
let dotButton = document.getElementById("dot-button");
currentNumberDisplay.innerHTML = 0;
let currentNumber = '';
let currentResult = '';
let currentExpression = '';
let currentOperator = '';
let number1 = '';
let number2 = '';

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearComplete);

allNumberButtons.forEach(element => {
    element.addEventListener('click', getNumber);
});

let processNumString = function(str) {
    let floatNum = parseFloat(str);
    let result = floatNum - 0;
    return result;
}

function getNumber(e) {
    number = e.target.value;
    currentNumber += number;
    currentNumber = parseFloat(currentNumber);

    if (currentNumber.length < 1) {
        currentNumberDisplay.innerHTML = number;
    } else {
        currentNumberDisplay.innerHTML = currentNumber;
    }    
}

function clear() {
    number = 0;
    currentNumberDisplay.innerHTML = 0;
    currentNumber = 0;
    currentResult = '';
    currentResultDisplay.innerHTML = '';
}

function clearComplete() {
    clear();
    number1 = '';
    number2 = '';
}

allOperatorButtons.forEach(element => {    
    element.addEventListener('click', processOperator);    
});

function getMathResult() {
    if (currentOperator === '+') {
        currentNumber = parseFloat(number1) + parseFloat(number2);
        currentNumberDisplay.innerHTML = currentNumber;
        currentResultDisplay.innerHTML = currentNumber;
        currentOperator = '';
    } else if (currentOperator === '-') {
        currentNumber = parseFloat(number1) - parseFloat(number2);
        currentNumberDisplay.innerHTML = currentNumber;
        currentResultDisplay.innerHTML = currentNumber;
        currentOperator = '';
    } else if (currentOperator === '*') {
        currentNumber = parseFloat(number1) * parseFloat(number2);
        currentNumberDisplay.innerHTML = currentNumber;
        currentResultDisplay.innerHTML = currentNumber;
        currentOperator = '';
    } else if (currentOperator === '/') {
        currentNumber = parseFloat(number1) / parseFloat(number2);
        currentNumberDisplay.innerHTML = currentNumber;
        currentResultDisplay.innerHTML = currentNumber;
        currentOperator = '';
    }
    number1 = currentNumber;
}

function processOperator(e) {
    if (number1) {
        number2 = currentNumber;
    } else number1 = currentNumber;
    
    clear();

    currentOperator = e.target.value;
    currentResultDisplay.innerHTML = `${number1} ${currentOperator}`;
}

function countExpression(){
    equalsButton.forEach(element => {
        element.addEventListener('click', () => {
            number2 = currentNumber;
            getMathResult();            
        });
    });
}

countExpression();

document.addEventListener('keydown', (e) => {
    getNumberKey(e);
    getOperatorKey(e);
});

function getNumberKey(e) {
    if (Number.isFinite(parseFloat(e.key))) {
        number = e.key;    
        currentNumber += number;
        currentNumber = processNumString(currentNumber);

        if (currentNumber.length < 1) {
            currentNumberDisplay.innerHTML = number;
        } else {
            currentNumberDisplay.innerHTML = currentNumber;
        }
    }
}

backspaceButton.addEventListener('click', deleteLast);

function deleteLast() {
    currentNumber = currentNumber.toString();
    currentNumber = currentNumber.slice(0, currentNumber.length - 1);
    currentNumberDisplay.innerHTML = currentNumber;
    
    if (!parseFloat(currentNumber)) {
        currentNumber = 0;
        currentNumberDisplay.innerHTML = 0;
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Backspace") {
        e.preventDefault();
        deleteLast();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        e.preventDefault();
        clear();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        number2 = currentNumber;
        getMathResult();
    }
});

changeSignButton.addEventListener('click', changeSign);

function changeSign() {
    currentNumber = currentNumber * -1;
    if (number1) {
        number2 = currentNumber;
    } else number1 = currentNumber;
    
    currentNumberDisplay.innerHTML = currentNumber;
}

dotButton.addEventListener('click', addDot);

function addDot() {
    currentNumber = currentNumber + ".";    
}

let operators = ['/', '+', '-', '*'];

function getOperatorKey(e) {
    if (operators.includes(e.key)) {
        if (number1) {
            number2 = currentNumber;
        } else number1 = currentNumber;
        
        clear();
    
        currentOperator = e.key;
        currentResultDisplay.innerHTML = `${number1} ${currentOperator}`;
    }
}