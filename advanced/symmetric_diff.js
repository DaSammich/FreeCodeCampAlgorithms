function sym() {

	// build a 2d array for reducing purposes

	var args = [];

	// build 2d array for reduce function
	for (var i = 0; i < arguments.length; i++) {
		args.push(arguments[i]);
	}

  args = (args.reduce(function(prev, curr, ind, array) {
  	return diff(prev, curr);
  })).sort();

  console.log(args);

  return args;
}

function diff(a, b) {

	var result = [];

	for (var i in a) {
		if (b.indexOf(a[i]) === -1 &&
					result.indexOf(a[i]) === -1) {
			// console.log(a[i]);
			result.push(a[i]);
		}
	}
	for (var i in b) {
		if (a.indexOf(b[i]) === -1 &&
					result.indexOf(b[i]) === -1) {
			// console.log(b[i]);
			result.push(b[i]);
		}
	}

	return result;
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
