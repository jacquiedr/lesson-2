function oddities(nums) {
  let newArr = [];
  for (let index = 0; index < nums.length; index += 2) {
    newArr.push(nums[index]);
  }
  return newArr;
}

function evenElements(nums) {
  return nums.filter(function(number) {
    return number % 2 === 0;
  });
}