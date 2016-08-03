function binaryAgent(str) {

	str = str.split(" ");
	var result = "";

	// convert them all to dec nums
	for (var i in str) {
		result += String.fromCharCode(binToDec(str[i]));
	}
	
  return result;
}

// takes an bin number and converts it to dec
// it expects a bin num as a string
function binToDec(n) {

	var tot = 0;

	debugger;

	for (var i = n.length - 1; i >= 0; i--) {
		var power = (n.length - i - 1);
		var dec = Math.pow(2, power);
		tot += parseInt(n[i]) * dec;

	}

	return tot;
}


console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));