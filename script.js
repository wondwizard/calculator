const screen = document.getElementById('screen');
let number;

function placeNum(num) {
    screen.textContent = num;
}

function add(num1, num2) {
    console.log(num1 + num2);
}

function subtract(num1, num2) {
    console.log(num1 - num2);
}

function multiply(num1, num2) {
    console.log(num1 * num2);
}

function divide(num1, num2) {
    console.log(num1 / num2);
}

[...document.getElementsByClassName("num")].forEach(function(item) {
    // adding eventListener to the elements
    item.addEventListener('click', function() {
      // calling the methods
      // this.id will be the id of the clicked button
      // there is a method in the object by same name, which will be trigger
      
        obj[this.id]();
        placeNum(number);
      
    })
});

let obj = {
    zero: function() {
        number = 0;
    },
    one: function() {
        number = 1;
    },
    two: function() {
        number = 2;
    },
    three: function() {
        number = 3;
    },
    four: function() {
        number = 4;
    },
    five: function() {
        number = 5;
    },
    six: function() {
        number = 6;
    },
    seven: function() {
        number = 7;
    },
    eight: function() {
        number = 8;
    },
    nine: function() {
        number = 9;
    },
    divide: function() {
        number = '/';
    },
    multiply: function() {
        number = '*';
    },
    plus: function() {
        number = '+';
    },
    minus: function() {
        number = '-';
    },
    equals: function() {
        number = '=';
    },
}

