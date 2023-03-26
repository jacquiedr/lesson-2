let readlineSync = require('readline-sync');

let bill = parseFloat(readlineSync.question('What is the bill? '));

let tipPercentage = parseFloat(readlineSync.question('What is the tip percentage? '));

let tip = (bill / 100) * tipPercentage;

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}\nThe total is $${total.toFixed(2)}`);

