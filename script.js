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
        case operator == '*':
            multiply(num1, num2);
            break;
        case operator == '/':
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
    let mathOperaton = '';
    const digitsEl = document.querySelectorAll('.digits');
    digitsEl.forEach((digit) => {
        digit.addEventListener('click', () => {
            const digitToDisplay = Number(digit.textContent);
            operationDisplay.textContent += digitToDisplay;
            mathOperaton += digitToDisplay;
        });
    });
}
toDisplay();