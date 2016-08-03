function dropElements(arr, func) {

	var result = [];

	for (var i in arr) {
		if (func(arr[i])) {
			result = arr.slice(i);
			break;
		}
	}

	return result;
}


// console.log(findElement([1,2,3,4,5], function(val) {
// 	return val > 1;
// }));

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));