function unite() {

	var args = Array.prototype.slice.call(arguments, 0);
	var result = [];

	for (var i in args) {
		result.push(args[i]);
	}

	result = trim(result);

  return result;
}

function trim(arr) {
	var check = [];

		for (var i in arr) {
			for (var j in arr[i]) {
				if (check.indexOf(arr[i][j]) === -1) {
					check.push(arr[i][j]);
				}
			}
		}

	return check;
}

console.log(unite([1, 3, 2], [1, [5]], [2, [4]]));
