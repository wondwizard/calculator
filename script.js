const screen = document.getElementById('screen');
const clear = document.getElementById('clear');
const equal = document.getElementById('equals');
const reset = document.getElementById('reset');
const changeSign = document.getElementById('changeSign');
const equation = document.getElementById('equation');

let number;
let currentNumber;
let total = 0;
let operator;
let done = false;
let sign = 'positive';

let numObj = {
    zero: function() {
        checkIfDone();
        number = '0';
    },
    one: function() {
        checkIfDone();
        number = '1';
    },
    two: function() {
        checkIfDone();
        number = '2';
    },
    three: function() {
        checkIfDone();
        number = '3';
    },
    four: function() {
        checkIfDone();
        number = '4';
    },
    five: function() {
        checkIfDone();
        number = '5';
    },
    six: function() {
        checkIfDone();
        number = '6';
    },
    seven: function() {
        checkIfDone();
        number = '7';
    },
    eight: function() {
        checkIfDone();
        number = '8';
    },
    nine: function() {
        checkIfDone();
        number = '9';
    },
    dot: function() {
        checkIfDone();
        number = '.';
    },
}

let operatorObj = {
    plus: function() {
        operator = '+';
        currentNumber = document.getElementById('screen').textContent;
        total += +currentNumber;
        sign = 'positive';
        clearScreen();
    },
    minus: function() {
        operator = '-';
        currentNumber = document.getElementById('screen').textContent;
        if (total === 0) {
            total = +currentNumber;
        } else {
            total -= +currentNumber;
        }
        sign = 'positive';
        clearScreen();
    },
    divide: function() {
        operator = '/';
        currentNumber = document.getElementById('screen').textContent;
        if (total === 0) {
            total = +currentNumber;
        } else {
            total /= +currentNumber;
        }
        sign = 'positive';
        clearScreen();
    },
    multiply: function() {
        operator = '*';
        currentNumber = document.getElementById('screen').textContent;
        if (total === 0) {
            total = +currentNumber;
        } else {
            total *= +currentNumber;
        }
        sign = 'positive';
        clearScreen();
    },
}


//calculations functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

//screen functions
function placeNum(num) {
    screen.textContent += num;
}

function clearScreen() {
    screen.textContent = '';
}

//lets you continue calculations after pressing equals
function checkIfDone() {
    if (done === true) {
        clearScreen();
        done = false;
    }
}


//event listeners
[...document.getElementsByClassName("num")].forEach(function(item) {
    item.addEventListener('click', function() {
        numObj[this.id]();
        if (screen.textContent.length < 17) {
            placeNum(number);
        }
        
    })
});

[...document.getElementsByClassName("operator")].forEach(function(item) {
    item.addEventListener('click', function() {
        operatorObj[this.id]();
        equation.textContent = '= ' + total + ' ' + operator;    
    })
    
});

equal.addEventListener('click', () => {
    let lastNumber = document.getElementById('screen').textContent;
    
    if (operator === '+') {
        screen.textContent = add(total, +lastNumber);
        total = 0;
        done = true;
    } else if (operator === '-') {
        screen.textContent = subtract(total, +lastNumber);
        total = 0;
        done = true;
    } else if (operator === '/') {
        if (+lastNumber === 0) {
            screen.textContent = 'undefined';
            total = 0;
            done = true;
        } else {
            screen.textContent = divide(total, +lastNumber);
            total = 0;
            done = true;
        }
    } else if (operator === '*') {
        screen.textContent = multiply(total, +lastNumber);
        total = 0;
        done = true;
    }

    equation.textContent = '';
})

clear.addEventListener('click', () => {
    clearScreen();
    sign = 'positive';
});

reset.addEventListener('click', () => {
    clearScreen();
    total = 0;
    operator = '';
    sign = 'positive';
    done = false;
    equation.textContent = '';
});

changeSign.addEventListener('click', () => {
    if (sign === 'positive') {
        screen.textContent = screen.textContent.replace(/^/, '-');
        sign = 'negative';
    } else {
        screen.textContent = screen.textContent.replace('-', '');
        sign = 'positive';
    }
});