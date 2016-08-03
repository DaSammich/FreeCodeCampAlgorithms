function fearNotLetter(str) {

	var result = undefined;

	for (var i = 0; i < str.length - 1; i++) {
		if (str.charCodeAt(i) + 1 !== 
					str.charCodeAt(i + 1)) {
			var code = str.charCodeAt(i) + 1;
			result = String.fromCharCode(code);
			console.log(result);
			break;
		}
	}

  return result;
}

console.log(fearNotLetter("abce"));
