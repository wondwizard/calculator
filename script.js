const screen = document.getElementById('screen');
const clear = document.getElementById('clear');
const equal = document.getElementById('equals');

let number;
let currentNumber;
let total = 0;
let operator;
let done = false;

function checkIfDone() {
    if (done === true) {
        clearScreen();
        done = false;
    }

}

function placeNum(num) {
    screen.textContent += num;
}

function clearScreen() {
    screen.textContent = '';
}

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

[...document.getElementsByClassName("num")].forEach(function(item) {
    // adding eventListener to the elements
    item.addEventListener('click', function() {
      // calling the methods
      // this.id will be the id of the clicked button
      // there is a method in the object by same name, which will be trigger
      
        obj[this.id]();
        if (screen.textContent.length < 17) {
            placeNum(number);
        }
      
    })
});

let obj = {
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
}

clear.addEventListener('click', () => {
    clearScreen();
});

[...document.getElementsByClassName("operator")].forEach(function(item) {
    // adding eventListener to the elements
    item.addEventListener('click', function() {
      // calling the methods
      // this.id will be the id of the clicked button
      // there is a method in the object by same name, which will be trigger
      
        operatorObj[this.id]();      
    })
});

let operatorObj = {
    plus: function() {
        operator = '+';
        currentNumber = document.getElementById('screen').textContent;
        total += +currentNumber;
        console.log(total);
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
        console.log(total);
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
        console.log(total);
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
        console.log(total);
        clearScreen();
    },
}

equal.addEventListener('click', () => {
    let lastNumber = document.getElementById('screen').textContent;
    
    if (operator === '+') {
        potato = add(total, +lastNumber);
        console.log(potato);
        screen.textContent = potato;
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
            potato = divide(total, +lastNumber);
            screen.textContent = potato;
            total = 0;
            done = true;
        }
    } else if (operator === '*') {
        screen.textContent = multiply(total, +lastNumber);
        total = 0;
        done = true;
    }
})