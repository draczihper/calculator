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
            if (currentNum === 0) return null
            else return divide(lastNum, currentNum);
        default:
            return null;
    }
}

const toDisplay = function () {
    let operationDisplay = document.querySelector('#operation');
    let answerDisplay = document.querySelector('#answer');
    const digitButtons = document.querySelectorAll('.digits');
    const dotButton = document.querySelector('#dot');
    const operatorButtons = document.querySelectorAll('.operators');
    let hasDot = false;

    function handleDigitInput(digitToDisplay) {
        if (digitToDisplay === '.' && hasDot) {
            return;
        }
        if (digitToDisplay === '.') {
            hasDot = true;
            dotButton.disabled = true;
        }
        operationDisplay.textContent += digitToDisplay;
        currentNum = operationDisplay.textContent;
    }
    digitButtons.forEach((digitButton) => {
        digitButton.addEventListener('click', () => {
            const digitToDisplay = digitButton.textContent;
            handleDigitInput(digitToDisplay);
        });
    });

    function handleOperator (operatorToDisplay) {
        if (lastNum === '') {
            lastNum = currentNum;
            if (operatorToDisplay === '*'){
                operator = 'x';
            } else if (operatorToDisplay === '/') {
                operator = '÷';
            } else {
                operator = operatorToDisplay;
            }
            answerDisplay.textContent = lastNum + operator;
            operationDisplay.textContent = ''
        } else {
            if (operator !== '') {
                intermediateResult = operate(operator, lastNum, currentNum);
                if (operator === '÷' && currentNum == 0) {
                    operationDisplay.textContent = 'You can not divide by 0!';
                } else {
                    const roundedIntermediateResult = Math.round(intermediateResult * 1000) / 1000;
                    lastNum = roundedIntermediateResult;
                    if (operatorToDisplay === '*'){
                        operator = 'x';
                    } else if (operatorToDisplay === '/') {
                        operator = '÷';
                    } else {
                        operator = operatorToDisplay;
                    }
                    currentNum = '';
                    answerDisplay.textContent = intermediateResult + operatorToDisplay;
                    operationDisplay.textContent = '';
                }
            }
        }
    }
    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener('click', () => {
            const operatorToDisplay = operatorButton.textContent;
            handleOperator(operatorToDisplay);
        });
    });
    const equalButton = document.querySelector('#equal');
    equalButton.addEventListener('click', () => {
        if (lastNum !== '' && currentNum !== '' && operator !== '') {
            answerDisplay.textContent = lastNum + operator + currentNum + '=';
            intermediateResult = operate(operator, lastNum, currentNum);
            if (operator === '÷' && currentNum == 0) {
                operationDisplay.textContent = 'You can not divide by 0!';
            } else {
                const roundedIntermediateResult = Math.round(intermediateResult * 1000) / 1000;
                operationDisplay.textContent = roundedIntermediateResult;
                lastNum = roundedIntermediateResult;
                currentNum = '';
                operator = '';
            }
        }
    });
    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (/^[0-9.]$/.test(key)) {
            handleDigitInput(key);
        } else if (key === '+' || key === '-') {
            handleOperator(key);
        } else if (key === '*' || key === '/') {
            if (key === '/') {
                event.preventDefault();
            }
            handleOperator(key);
        } else if (key === 'Backspace') {
            handleDelete();
        } else if (key === 'Escape') {
            clearButton.click();
        } else if (key === 'Enter' || key === '=') {
            equalButton.click();
        }
    });
    function handleDelete() {
        if (currentNum.length > 0) {
            currentNum = currentNum.slice(0, -1);
            // } else if (operator){
            //     operator = '';
        } else if (lastNum > 0) {
            lastNum = lastNum.slice(0, -1);
        }
        operationDisplay.textContent = operationDisplay.textContent.slice(0, -1);
    }
    const deleteButton = document.querySelector('#delete');
    deleteButton.addEventListener('click', handleDelete);

    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => {
        lastNum = '';
        operator = '';
        currentNum = '';
        hasDot = false;
        intermediateResult = null;
        dotButton.disabled = false;
        answerDisplay.textContent = '';
        operationDisplay.textContent = '';
    });
}
toDisplay();



