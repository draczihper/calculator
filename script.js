// OPERATIONS
const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

let lastNum = '';
let operator = '';
let currentNum = '';
let intermediateResult = null;

const operate = function (operator, lastNum, currentNum) {
    lastNum = Number(lastNum);
    currentNum = Number(currentNum);
    switch (operator) {
        case '+':
            return add(lastNum, currentNum);
        case '-':
            return subtract(lastNum, currentNum);
        case 'x':
            return multiply(lastNum, currentNum);
        case '÷':
            return divide(lastNum, currentNum);
        default:
            return null;
    }
}

const toDisplay = function () {
    let operationDisplay = document.querySelector('#operation');
    let answerDisplay = document.querySelector('#answer');
    const digitButtons = document.querySelectorAll('.digits');
    digitButtons.forEach((digitButton) => {
        digitButton.addEventListener('click', () => {
            const digitToDisplay = digitButton.textContent;
            operationDisplay.textContent += digitToDisplay;
            currentNum = operationDisplay.textContent;
        });
    });
    const operatorButtons = document.querySelectorAll('.operators');
    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener('click', () => {
            const operatorToDisplay = operatorButton.textContent;
            if (lastNum === ''){
                lastNum = currentNum;
                operator = operatorToDisplay;
                answerDisplay.textContent = lastNum + operator;
                operationDisplay.textContent = ''
            } else {
                if (operator !== ''){
                    intermediateResult = operate(operator, lastNum, currentNum);
                    lastNum = intermediateResult;
                    operator = operatorToDisplay;
                    currentNum = '';
                    answerDisplay.textContent = intermediateResult + operatorToDisplay;
                    operationDisplay.textContent = ''
                }
            }
        });
    });
    const equalButton = document.querySelector('#equal');
    equalButton.addEventListener('click', () => {
        if (lastNum !== '' && currentNum !== '' && operator !== '') {
            intermediateResult = operate(operator, lastNum, currentNum);
            operationDisplay.textContent = intermediateResult;
            answerDisplay.textContent = '';
            lastNum = intermediateResult;
            currentNum = '';
            operator = '';
        }
    });
}
toDisplay();

