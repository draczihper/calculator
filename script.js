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
    switch (operator) {
        case operator == '+':
            add(num1, num2);
            break;
        case operator == '-':
            subtract(num1, num2);
            break;
        case operator == 'x':
            multiply(num1, num2);
            break;
        case operator == '÷':
            divide(num1, num2);
            break;
        default:
            break;
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
            const digitToDisplay = Number(digitButton.textContent);
            operationDisplay.textContent += digitToDisplay;
            num2 = Number(operationDisplay.textContent);
        });
    });
    const operatorButtons = document.querySelectorAll('.operators');
    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener('click', () => {
            const operatorToDisplay = operatorButton.textContent;
            answerDisplay.textContent = operationDisplay.textContent + operatorToDisplay;
            operator = operatorToDisplay;
            num1 = Number(operationDisplay.textContent);
            operationDisplay.textContent = '';
        });
    });
}
toDisplay();