let readline = require('readline-sync');

// eslint-disable-next-line radix
let ageCurrent = parseInt(readline.question('What is your age? '));
// eslint-disable-next-line radix
let ageRetiring = parseInt(readline.question('At what age would you like to retire? '));

let today = new Date();
let currentYear = today.getFullYear();
// Calling the Date() function (without the new keyword) returns a
// string representation of the current date and time, exactly as
// new Date().toString() does.
// Any arguments given in a Date() function call (without the new keyword) are
// ignored; regardless of whether it's called with an invalid date string — or
// even called with any arbitrary object or other primitive as an argument —
// it always returns a string representation of the current date and time.

let yearsLeft = ageRetiring - ageCurrent;
let yearOfRetirement = currentYear + (ageRetiring - ageCurrent);

console.log(`It's ${currentYear}. You will retire in ${yearOfRetirement}.\nYou only have ${yearsLeft} years of work to go!`);
