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
const numbers = document.querySelectorAll('.number');
const ac = document.querySelector('#ac');
const del = document.querySelector('#del');

// ==========================================================================
// Functions
// ==========================================================================

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    return operator(a, b);
};

function allClear() {
    displayValue = 0;
    currentNum.textContent = displayValue;
};

function deleteNum() {
    if (displayValue.length <= 1) {
        displayValue = 0;
    } else {
        displayValue = displayValue.slice(0, -1);
    }
    currentNum.textContent = displayValue;
};

function storeValue(value) {
    if (displayValue === 0) {
        displayValue = value;
    } else {
        displayValue = displayValue + value;
    }
    currentNum.textContent = displayValue;
};

// ==========================================================================
// Event-Listeners
// ==========================================================================

ac.addEventListener('click', allClear);

del.addEventListener('click', deleteNum);

numbers.forEach(number => number.addEventListener('click', () => {
    storeValue(number.value);
}));

let displayValue = '';

