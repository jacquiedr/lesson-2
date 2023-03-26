let readline = require('readline-sync');

let userName = readline.question("What is your name? ");

if (userName[userName.length - 1] === '!') {
  userName = userName.slice(0, -1);
  console.log(`HELLO ${userName.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${userName}.`);
}