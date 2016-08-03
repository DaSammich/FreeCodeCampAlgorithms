function permAlone(str) {

	// case of string with length < 1
	if (str.length === 1) {
		return 1;
	} else if (str.length < 1) {
		return -1;
	}


	// get the permutations
	var perms = getPerms(str);

	// flatten the last ones
	var t = initFlatten(perms);

	// flatten & merge the rest
	t = fullMerge(t);

	var noRepeats = countDups(t);

	return noRepeats;
}	

// input in a fully merged permutated string 
// outputs the total number of duplicates
function countDups(array) {

	var total = 0;

	for (var i in array) {
		if (hasDup(array[i]) === false) {
			total ++;
		}
	}

	return total;
}

// checks a string if it has any duplicates
function hasDup(str) {

	check = false;

	for (var i = 0; i < str.length - 1; i++) {
		if (str[i] === str[i + 1]) {
			check = true;
			break;
		}
	}

	return check;
}

// this is the popped stage before merging
// i.e. --> [ ['a',['bc','cb']], ['b',['ac','ca']], ..[..] ] to...
// --> ['abc','acb', ..., 'cab','cba']
function fullMerge(t) {

	// base case which expects the initFlattened return strings
	if (typeof t[0] === 'string' && typeof t[1] ==='string') {
		// console.log("hit base case");
		return t;
	}

	else {

		// stage 1 combine
		var result = [];
		for (var i = 0; i < t.length; i += 2) {
			result.push(merge(t[i], fullMerge(t[i+1])));
		}

		// console.log();
		// console.log(result);

		// stage 2 flatten that array completely
		var res = [];
		for (var i in result) {
			res = res.concat(result[i]);
		}

		// console.log();
		// console.log(res);
		return res;
	}
}

// merge a general case with array for [c, <array>]
// i.e. --> ['a', ['bc', 'cb']] = [['abc', 'acb']]
// note that this is a general/recursive case
function merge(head, tail) {
	var result = [];
	for (var i = 0; i < tail.length; i++) {
		result.push(head + tail[i]);
	}

	return result;
}

// merge the insides of the 2's of the deepest object
// i.e. --> ['a', [['b'], ['c']]] = ['a', ['bc', 'cb']]
// note that this is a special case and only occurs 1nce per obj
function initFlatten(result) {

	// this is the special base case
	if (result.length > 2) {
		var temp = [];
		for (var i in result) {
			temp.push(result[i][0]);
			temp.push(initFlatten(result[i][1]));
		}
		return temp;
	} 
	// this is the special recursive condition
	else if (result.length === 2 && 
						typeof result[0] === 'object') {
		var tmp = [];
		for (var i in result) {
			var str = "";
			str += result[i][0];
			str += result[i][1];
			tmp.push(str);
		}
		return tmp;
	}
}

// splice a string (doesn't modify str)
function spliceSlice(str, index, count, add) {
	return str.slice(0, index) + (add || "") + str.slice(index + count);
}

// recursively creates the permutation of all combos
// does not "flatten" the results
function getPerms(str) {

	// base cases
	if (str.length === 1) {
		// console.log("return :\t" + str);
		// console.log();
		return str;
	}

	// recursive case
	else {

		var result = [];

		for (var i = 0; i < str.length; i++) {

			// splice out each char
			var spliced = str[i];
			var other = spliceSlice(str, i, 1);
			var subPush = [];

			subPush.push(spliced);

			// console.log('str :\t\t' + str);
			// console.log('spliced :\t' + spliced);
			// console.log('other :\t\t' + other);
			// console.log();

			subPush.push(getPerms(other));
			result.push(subPush);
		}

		return result;
	}
}

console.log(permAlone('a'));
