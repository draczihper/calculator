// OPERATIONS
const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a + b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

let num1;
let operator;
let num2;

const operate = function (operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
        default:
            return null;
    }
}

// document.addEventListener('DOMContentLoaded', function () {
//     const operationDisplay = document.querySelector('#operation');
//     const digitsEl = document.querySelectorAll('.digits');
//     digitsEl.forEach((digit) => {
//         digit.addEventListener('click', () => {
//             console.log(digit.textContent);
//         });
//     });
// });

const toDisplay = function () {
    let operationDisplay = document.querySelector('#operation');
    let answerDisplay = document.querySelector('#answer');
    const digitButtons = document.querySelectorAll('.digits');
    digitButtons.forEach((digitButton) => {
        digitButton.addEventListener('click', () => {
            const digitToDisplay = digitButton.textContent;
            operationDisplay.textContent += digitToDisplay;
            num2 = operationDisplay.textContent;
        });
    });
    const operatorButtons = document.querySelectorAll('.operators');
    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener('click', () => {
            const operatorToDisplay = operatorButton.textContent;
            answerDisplay.textContent = operationDisplay.textContent + operatorToDisplay;
            operator = operatorToDisplay;
            num1 = operationDisplay.textContent;
            operationDisplay.textContent = '';
        });
    });
    const equalButton = document.querySelector('#equal');
    equalButton.addEventListener('click', () => {
        answerDisplay.textContent += num2 + equalButton.textContent;
        operationDisplay.textContent = '';
        operationDisplay.textContent = operate(operator, num1, num2);
    })
}
toDisplay();

