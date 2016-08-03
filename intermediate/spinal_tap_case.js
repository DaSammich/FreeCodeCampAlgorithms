function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  str = fixCamelCase(str);

  console.log(str);

  // spinal tap case it
  var reg = /_/g;

  str = str.replace(reg, "");

  str = str.split(/\s+/).join("-");

  console.log(str);

  return str;
}

// takes string and insert space in camelCases
function fixCamelCase(str) {
	var arr = str.split("");
	var prev;
	var curr;
	var newStr = "";
	var reg = /[A-Za-z]/;

	// insert in the first letter
	newStr += str[0];

	for (var i = 1; i < arr.length; i++) {
		prev = arr[i - 1];
		curr = arr[i];
		if (prev.toLowerCase() === prev &&
					curr.toUpperCase() === curr &&
					reg.test(curr)
					) {
			newStr += " ";
			newStr += curr;

		} else {
			newStr += curr;
		}
	}

	newStr = newStr.toLowerCase();
	return newStr;
}	

// spinalCase("camelCaseTooGood another camelCase");
// spinalCase("The_Andy_Griffith_Show");
// fixCamelCase("camelCaseTooGood another camelCase");
spinalCase("This Is Spinal Tap");