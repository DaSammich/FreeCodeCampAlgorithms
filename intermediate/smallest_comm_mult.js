function smallestCommons(arr) {

	var myArg = range(arr);

	var result = [];

	for (var i = 0; i < myArg.length; i++) {
		result.push(factorize(myArg[i]));
	}

	var nums = new Object();

	// test case
	var curr;

	for (var j in result) {
		// count each occurance in array
		curr = result[j];
		for (var i in curr) {
			// console.log(countNum(curr, curr[i]));
			if (!(curr[i] in nums)) {
				nums[curr[i]] = countNum(curr, curr[i]);
			} else if (curr[i] in nums &&
									nums[curr[i]] < countNum(curr, curr[i])) {
				nums[curr[i]] = countNum(curr, curr[i]);
			}
		}
	}

	var keys = Object.keys(nums);
	var tot = 1;

	console.log(nums);
	console.log(result);

	for (var i in keys) {
		// nums[keys[i]] is how many
		// keys[i] is the num
		tot *= (Math.pow(parseInt(keys[i]), nums[keys[i]]));
	}

	return tot;
}	

// counts the occurence of 1 number in array
// takes in the array and the number to count
function countNum(array, num) {

	result = 0;

	for (var i in array) {
		if (num === array[i]) {
			result++;
		}
	}

	return result;
}

// see if num is prime, takes in 1 num
function isPrime(n) {

	if (n === 1 || n === 2) {
		return true;
	} else if (n <= 0) {
		return false;
	}

	var flg = true;

	for (var i = 2; i < n; i++) {
		if (n % i === 0) {
			flg = false;
			break;
		}
	}

	return flg;
}

// takes in a num and returns list of prime factors
function factorize(n) {

	result = [];

	var i = 2;
	while(n !== 1) {
		if (n % i == 0) {
			result.push(i);
			n /= i;
			i = 1;
		}
		i++;
	}

	return result;
}

// like python range
function range(arr) {

	var big = Math.max(arr[0], arr[1]);
	var small = Math.min(arr[0], arr[1]);
	var result = [];

	while(small <= big) {
		result.push(small);
		small++;
	}
	return result;
}

// console.log(isPrime(7));
console.log(smallestCommons([13,1]));
// console.log(primify(range([7,21])));
// console.log(smallestCommons([10,20]));
// console.log(factorize(20));
