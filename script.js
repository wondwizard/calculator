const zero = document.getElementById('zero');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const screen = document.getElementById('screen');


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

[...document.getElementsByTagName("button")].forEach(function(item) {
    // adding eventListener to the elements
    item.addEventListener('click', function() {
      // calling the methods
      // this.id will be the id of the clicked button
      // there is a method in the object by same name, which will be trigger
      obj[this.id]();
  
    })
  })

  let obj = {
    0: function() {
        console.log(0);
    },
    1: function() {
        console.log(1);
    },
    2: function() {
        console.log(2);
    },
    3: function() {
        console.log(3);
    },
    4: function() {
        console.log(4);
    },
    5: function() {
        console.log(5);
    },
    6: function() {
        console.log(6);
    },
    7: function() {
        console.log(7);
    },
    8: function() {
        console.log(8);
    },
    9: function() {
        console.log(9);
    },
  }