// eslint-disable-next-line max-lines-per-function
function stringToSignedInteger(string) {
  const DIGITS_AND_SIGNS = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    '-': 0,
    '+': 0
  };
  let arrayOfDigits = string.split("").map(char => DIGITS_AND_SIGNS[char]);
  let sign = string.split("").filter(el => el === '-' || el === '+');
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  if (sign.includes('-')) {
    return value * -1;
  }
  return value;
}

console.log(stringToSignedInteger("4321") === 4321);

function stringToInteger(num) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = num.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

function stringToSignedIntegerRefac(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}