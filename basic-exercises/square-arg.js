function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// Further exploration
function pow(num, exp) {
  let result = 1;
  for (let index = 1; index <= exp; index++) {
    result = multiply(result, num);
  }
  return result;
}

console.log(pow(5,5))