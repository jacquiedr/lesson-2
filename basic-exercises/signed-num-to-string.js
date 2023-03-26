function signedIntToStr(number) {
  if (number == 0) return '0';
  let numArr = [];
  let x = number;
  if (Math.sign(number) === -1) {
    number *= -1;
  }
  while (number > 0) {
    let remainder = number % 10;
    numArr.unshift(remainder);
    number = Math.floor(number / 10);
  }
  if (Math.sign(x) === -1) {
    return '-' + numArr.join('');
  }
  return '+' + numArr.join('');
}

console.log(signedIntToStr(0));

function integerToString(number) {
  let digits = [];
  while (number > 0) {
    let remainder = number % 10;
    digits.push(remainder);
    number = Math.floor(number / 10);
  }
  return digits.reverse().join('');
}

function signedIntToStrRefac(number) {
  if (1 / number === -Infinity) return '-0';
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
}
}

console.log(signedIntToStrRefac(-0) === '-0');