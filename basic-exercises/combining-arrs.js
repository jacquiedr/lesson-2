function union(arr1, arr2) {
	let mergedArray = arr1.concat(arr2);
	return mergedArray.filter((item, index) => mergedArray.indexOf(item) === index);
}

console.log(union([1, 3, 5], [3, 6, 9]));

function copyNonDupsTo(resultArray, array) {
	array.forEach(value => {
	  if (!resultArray.includes(value)) {
		resultArray.push(value);
	  }
	});
}

function union(...args) {
	const newArray = [];
	args.forEach(value => copyNonDupsTo(newArray, value))
	return newArray;
}                       
									
let myVariable = 'hello world';
myVariable = 23;                
console.log(23 == '23')
          