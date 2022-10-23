// ==========================================================================
// Neon Calculator
// ==========================================================================

// ==========================================================================
// TOC
// ==========================================================================


// ==========================================================================
// DOM References
// ==========================================================================

const currentNum = document.querySelector('.currentNum');
const previousNum = document.querySelector('.previousNum');
const outputOperator = document.querySelector('.outputOperator');
// const numbers = document.querySelectorAll('.number');
// const ac = document.querySelector('#ac');
// const del = document.querySelector('#del');
// const operators = document.querySelectorAll('.operator');

const buttons = document.querySelectorAll('button');

// ==========================================================================
// Initial values
// ==========================================================================

let newValue = 0;
let oldValue = 0;
let calc = 0;
let history = 0;
let currentOperator = null;

// ==========================================================================
// Functions
// ==========================================================================

function operate(button) {
    if (button.className === 'number') {
        storeValue(button.textContent);
    } else if (button.value === 'ac') {
        allClear();
    } else if (button.value === 'del') {
        deleteNum();
    } else if (button.className === 'operator') {
        calculate();
        outputOperator.textContent = button.textContent;
        if (button.value !== 'equals') {
            currentOperator = button.value;
        };
        previousNum.textContent = oldValue;
        currentNum.textContent = calc;
    };
    console.log(button);
    console.log(oldValue);
    console.log(newValue);
    console.log(calc);
};

function calculate() {
    if (currentOperator === null) {
        oldValue = newValue;
        newValue = 0;
    } else {
        window[currentOperator]();  // calls operator function
        oldValue = calc;            // move calc into 'memory'
        newValue = 0;               // allows input of new number
    };
}

function storeValue(value) {
    if (newValue == 0) {
        newValue = value;
    } else {
        newValue = newValue + value;
    }
    currentNum.textContent = newValue;
};

function add() {
    calc = parseInt(oldValue) + parseInt(newValue);
};

function subtract() {
    calc = parseInt(oldValue) - parseInt(newValue);
};

function multiply() {
    calc = parseInt(oldValue) * parseInt(newValue);
};

function divide() {
    calc = parseInt(oldValue) / parseInt(newValue);
};

function allClear() {
    newValue = 0;
    oldValue = 0;
    calc = 0;
    history = '';
    currentNum.textContent = newValue;
    previousNum.textContent = oldValue;
    currentOperator = null;
    outputOperator.textContent = '';
};

function deleteNum() {
    if (newValue.length <= 1) {
        newValue = 0;
    } else if (newValue.length > 1) {
        newValue = newValue.slice(0, -1);
    }
    currentNum.textContent = newValue;
};


// ==========================================================================
// Event-Listeners
// ==========================================================================

buttons.forEach(button => button.addEventListener('click', () => {
    operate(button);
}));



