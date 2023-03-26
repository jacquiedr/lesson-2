function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === true);   // true