// PEDAC -> understand the problem, examples / test cases,
// data structures, algorith, and code

// input: array of numbers
// output: array of subarrays (each with two elements)
//         first half of og array in the first subarray
//         second half in the second subarray
//         if array is uneven, first half should contain
//         uneven number of elements

// example: [1, 2, 3, 4] => [[1, 2], [3, 4]]
//          [1, 5, 6, 7, 2] => [[1, 5], [6, 7], [2]]
//          [] => [[], []]

// algo: create empty array with 2 subarrays to store resulting array
//       if empty array, return empty subarray
//       if array length is that first element in first subarray, second empty
//       check if length of array is even or odd
//       if odd, add length of array / 2 + 1 to first subarray, rest in second
//       if even, add length of array / 2 to both
//       return resulting array

function halvsies(arr) {
  let middleIndex = Math.ceil(arr.length / 2);
  let subArray1 = arr.slice(0, middleIndex);
  let subArray2 = arr.slice(middleIndex);
  return [subArray1, subArray2];
}

console.log(halvsies([1]));