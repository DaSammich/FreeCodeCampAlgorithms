function pair(str) {

	var result = [];

	debugger;


	var y = (puffUp(str[0]));

	console.log(str);

	for (var i in str) {
		result.push(puffUp(str[i]));
	}


	return result;
}

function puffUp(val) {

	var result;

	switch(val) {
		case "A":
			result = ["A", "T"];
			break;
		case "T":
			result = ["T", "A"];
			break;
		case "C":
			result = ["C", "G"];
			break;
		case "G":
			result = ["G", "C"];
			break;
	}

	return result;
}

console.log(pair("ATCGA"));
