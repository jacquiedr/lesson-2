function integerToString(number) {
  let digits = [];
  while (number > 0) {
    let remainder = number % 10;
    digits.push(remainder);
    number = Math.floor(number / 10);
  }
  return digits.reverse().join('');
}

console.log(integerToString(321));