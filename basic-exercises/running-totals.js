function runningTotal(arr) {
  let newArr = [];
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    newArr.push(sum += arr[index]);
  }
  return newArr;
}

// Further Exploration
function runningTotalRefac(arr) {
  let sum = 0;
  return arr.map(function(value) {
    sum += value;
    return sum;
  });
}

console.log(runningTotalRefac([2, 3, 4, 12]));