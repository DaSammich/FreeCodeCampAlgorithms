// inputs in string constant
// outputs a number
function convert(word) {
	switch (word) {
		case "PENNY":
			return .01;
		break;
		case "NICKEL":
			return .05;
		break;
		case "DIME":
			return .10;
		break;
		case "QUARTER":
			return .25;
		break;
		case "ONE":
			return 1;
		break;
		case "FIVE":
			return 5;
		break;
		case "TEN":
			return 10;
		break;
		case "TWENTY":
			return 20;
		break;
		case "ONE HUNDRED":
			return 100;
		break;
	}
}	

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

function checkCashRegister(price, cash, cid) {

  var change = cash - price;
  var last = cid.length - 1;
  var result = [];

  // go backwards 
  // loop returns completed array
  for (var i = last; i >= 0; i--) {

  	var val = convert(cid[i][0]);
  	var total = 0;		// keep track of what you give back

  	debugger;

  	while (val <= change 
  				&& cid[i][1] > 0
  				&& change > 0) {
  		console.log(cid[i][1]);
  		change = +(change - val).toFixed(2);
			total = (total * 1000 + val * 1000) / 1000;
			cid[i][1] = (cid[i][1] * 1000 - val * 1000) / 1000;
  	}

  	if (total > 0) {	// means we gave something back
  		var temp = [cid[i][0], total];
  		result.push(temp);
  	}

  	if (change === 0) {
  		break;
  	}
  }

  // check the edge cases
  if (isDrawerEmpty(cid) && change === 0) {
  	result = "Closed";
  } else if (change > 0) {
  	result = "Insufficient Funds";
  }

  // here is your change, m'am
  return result;
}

function isDrawerEmpty(a) {
	var result = true;

	for (var i in a) {
		if (a[i][1] !== 0) {
			result = false;
			break;
		}
	}

	return result;
}

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
	