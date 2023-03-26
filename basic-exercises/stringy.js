function stringy(num) {
  let onesAndZeros = '';
  for (let idx = 0; idx < num; idx++) {
    if (idx % 2 === 0) {
      onesAndZeros += '1';
    } else {
      onesAndZeros += '0';
    }
  }
  return onesAndZeros;
}

function stringyV2(num) {
  let result = '';
  for (let idx = 0; idx < num; idx++) {
    let number = ((idx % 2) === 0 ? 1 : 0);
    result += number;
  }
  return result;
}

console.log(stringyV2(6));