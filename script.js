// ==========================================================================
// Neon Calculator
// ==========================================================================

// ==========================================================================
// TOC
// ==========================================================================

// - DOM References
// - Initial values
// - Functions
// - Event-Listeners

// ==========================================================================
// DOM References
// ==========================================================================

const currentNum = document.querySelector('.currentNum');
const previousNum = document.querySelector('.previousNum');
const outputOperator = document.querySelector('.outputOperator');
const buttons = document.querySelectorAll('button');

// ==========================================================================
// Initial values
// ==========================================================================

let newValue = 0;
let oldValue = 0;
let calc = 0;
let currentOperator = null;
let decimalToggle = false;

// ==========================================================================
// Functions
// ==========================================================================

function operate(button) {
    if (button.value === 'decimal') {
        decimal(button.textContent);
    } else if (button.className === 'number') {
        storeValue(button.textContent);
    } else if (button.value === 'ac') {
        allClear();
    } else if (button.value === 'del') {
        deleteNum();
    } else if (button.value === 'equals') {
        equals();
        return;
    } else if (button.className === 'operator') {
        calculate();
        decimalToggle = false;
        outputOperator.textContent = button.textContent;
        currentOperator = button.value;
        previousNum.textContent = oldValue;
        currentNum.textContent = newValue;
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
        calc = Math.round(calc * 100) / 100;
        oldValue = calc;            // move calc into 'memory'
        newValue = 0;               // allows input of new number
    };
};

function storeValue(value) {
    if (newValue == 0) {
        newValue = value;
    } else {
        newValue = newValue + value;
    }
    currentNum.textContent = newValue;
};

function add() {
    calc = parseFloat(oldValue) + parseFloat(newValue);
};

function subtract() {
    calc = parseFloat(oldValue) - parseFloat(newValue);
};

function multiply() {
    calc = parseFloat(oldValue) * parseFloat(newValue);
};

function divide() {
    calc = parseFloat(oldValue) / parseFloat(newValue);
};

function decimal(dot) {
    console.log('decimal');
    if (decimalToggle == false) {
        storeValue(dot);
        decimalToggle = true;
        return;
    } else if (decimalToggle) {
        return;
    };
};

function allClear() {
    newValue = 0;
    oldValue = 0;
    calc = 0;
    decimalToggle = false;
    currentNum.textContent = newValue;
    previousNum.textContent = oldValue;
    currentOperator = null;
    outputOperator.textContent = '';
};

function deleteNum() {
    if (newValue.length <= 1) {
        newValue = 0;
        decimalToggle = false;
    } else if (newValue.length > 1) {
        newValue = newValue.slice(0, -1);
    }
    currentNum.textContent = newValue;
};

function equals() {
    if (oldValue == 0 || newValue == 0) {
        outputOperator.textContent = '='
        previousNum.textContent = 0;
        currentNum.textContent = oldValue;
        return;
    };
    previousNum.textContent = `${oldValue} ${outputOperator.textContent} ${newValue}`;
    calculate();
    outputOperator.textContent = '=';
    currentNum.textContent = calc;
};

// ==========================================================================
// Event-Listeners
// ==========================================================================

buttons.forEach(button => button.addEventListener('click', () => {
    operate(button);
}));



