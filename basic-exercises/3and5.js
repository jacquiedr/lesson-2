function multisum(number) {
  let sum = 0;
  for (let index = 1; index <= number; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }
  return sum;
}

console.log(multisum(1000));