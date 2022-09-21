const allNumberButtons = document.querySelectorAll('.number');
let currentNumberDisplay = document.getElementById("digital-numbers");
let currentResultDisplay = document.getElementById("digital-numbers-result");
currentNumberDisplay.innerHTML = 0;
let currentNumber = '';
let currentResult = '';
let currentExpression = '';

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

const allOperatorButtons = document.querySelectorAll('.operator');

allOperatorButtons.forEach(element => {
    element.addEventListener('click', processCalculation);
});

function processCalculation(e) {

}