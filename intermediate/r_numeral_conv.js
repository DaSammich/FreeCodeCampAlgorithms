function convert(num) {
	var box = (num + "").split("");
	var result = "";

	// convert to ints
	for (var i = 0; i < box.length; i++) {
		box[i] = parseInt(box[i]);
	}

	for (var j = 0; j < box.length; j++) {
		var exp = Math.pow(10, box.length - 1 - j);
		var piece = box[j] * exp;
		result += convert_piece(piece);
	}

 return result;
}


console.log(convert(2014));

function convert_piece(num) {
	var result = "";

	switch(num) {
		// 0 to 9
		case 0:
			break;
		case 1:
			result = "I";
			break;
		case 2:
			result = "II";
			break;
		case 3:
			result = "III";
			break;
		case 4:
			result = "IV";
			break;
		case 5:
			result = "V";
			break;
		case 6:
			result = "VI";
			break;
		case 7:
			result = "VII";
			break;
		case 8:
			result = "VIII";
			break;
		case 9:
			result = "IX";
			break;

		// 10 - 90
		case 10:
			result = "X";
			break;
		case 20:
			result = "XX";
			break;
		case 30:
			result = "XXX";
			break;
		case 40:
			result = "XL";
			break;
		case 50:
			result = "L";
			break;
		case 60:
			result = "LX";
			break;
		case 70:
			result = "LXX";
			break;
		case 80:
			result = "LXXX";
			break;
		case 90:
			result = "XC";
			break;

		// 100 - 900
		case 100:
			result = "C";
			break;
		case 200:
			result = "CC";
			break;
		case 300:
			result = "CCC";
			break;
		case 400:
			result = "CD";
			break;
		case 500:
			result = "D";
			break;
		case 600:
			result = "DC";
			break;
		case 700:
			result = "DCC";
			break;
		case 800:
			result = "DCCC";
			break;
		case 900:
			result = "CM";
			break;

		// 1k - 9k
		case 1000:
			result = "M";
			break;
		case 2000:
			result = "MM";
			break;
		case 3000:
			result = "MMM";
			break;
	}


	return result;
}

