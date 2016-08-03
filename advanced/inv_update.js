function updateInventory(curr, upd) {
    // All inventory must be accounted for or you're fired!

  for (var i in upd) {

		var check = false;

			for (var j in curr) {

				if (curr[j][1] === upd[i][1]) {
					check = true;
					var newVal = upd[i][0];
					curr[j][0] += newVal;
					break;
				}
			}

  	if (!check) {
  		curr.push(upd[i]);
  	} 
  }

  return curr.sort(compare);
    // return curr;
}

// specifically sort by respective obj arrays
function compare(a, b) {
	if (a[1] > b[1]) {
		return 1;
	}

	if (a[1] < b[1]) {
		return -1;
	}

	return 0;
}


console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) );
