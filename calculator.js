// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const READLINE = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function validLanguage(lang) {
  return MESSAGES['validLanguages'].includes(lang);
}

prompt(MESSAGES['languageInput']);
let language = READLINE.question();

while (!validLanguage(language)) {
  prompt(MESSAGES['invalidLanguage']);
  prompt(MESSAGES['languageInput']);
  language = READLINE.question();
}
let messageInLang;
language = language.toLowerCase();

switch (language.toLowerCase()) {
  case 'english':
    messageInLang = MESSAGES['language'][0];
    break;
  case 'francais':
    messageInLang = MESSAGES['language'][1];
    break;
  case 'deutsch':
    messageInLang = MESSAGES['language'][2];
    break;
}

prompt(messageInLang['welcome']);

while (true) {
  prompt(messageInLang['firstNum']);
  let num1 = READLINE.question();

  while (invalidNumber(num1)) {
    prompt(messageInLang['invalidInput']);
    num1 = READLINE.question();
  }

  prompt(messageInLang['secondNum']);
  let num2 = READLINE.question();

  while (invalidNumber(num2)) {
    prompt(messageInLang['invalidInput']);
    num2 = READLINE.question();
  }

  prompt(messageInLang['operation']);
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messageInLang['invalidOperation']);
    operation = READLINE.question();
  }

  num1 = Number(num1);
  num2 = Number(num2);
  let output;
  switch (operation) {
    case '1':
      output = num1 + num2;
      break;
    case '2':
      output = num1 - num2;
      break;
    case '3':
      output = num1 * num2;
      break;
    case '4':
      output = num1 / num2;
      output = output.toFixed(3);
      break;
  }

  prompt(`${messageInLang['result']}${output}.`);

  prompt(messageInLang['continueCalculating']);
  let answer = READLINE.question();

  if (answer.toUpperCase() !== messageInLang['yes']) break;
}
