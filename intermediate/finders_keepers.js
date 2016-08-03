function findElement(arr, func) {

	return arr.filter(func)[0];
}


// console.log(findElement([1,2,3,4,5], function(val) {
// 	return val > 1;
// }));

console.log(findElement([1,2,3,4,5], function(val) {
	return val === 2;
}));