function sumPrimes(num) {
	return isPrime(num).reduce((prev, curr) => prev + curr);
}

// make a list of prime nums from 1 - n
function isPrime(n) {
	var list = [2];
	for (var i = 3; i <= n; i += 2) {
		var flg = true;
		for (var j = 3; j < i; j+=2) {
			if (i % j === 0) {
				flg = false;
				break;
			} 
		}
		if (flg) {
			list.push(i);
		}
	}
	return list;
}

console.log(sumPrimes(11));
