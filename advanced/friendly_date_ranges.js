// takes in day as str and adds fancy ending
function happyDay(s) {

	if (typeof s === 'string') {
		s = parseInt(s);
	}

	switch(s) {
		case 1:
			s += "st";
			break;
		case 2:
			s += "nd";
			break;
		case 3:
			s += "rd";
			break;
		default:
			s += "th";
	}

	return s;
}

// converts number month as str to letters
function happyMonth(s) {

	var months = [];
	s = parseInt(s) - 1;	// array goes from 0 - 11

	months[0] = "January";
	months[1] = "February";
	months[2] = "March";
	months[3] = "April";
	months[4] = "May";
	months[5] = "June";
	months[6] = "July";
	months[7] = "August";
	months[8] = "September";
	months[9] = "October";
	months[10] = "November";
	months[11] = "December";

	return months[s];
}

function makeFriendlyDates(arr) {

	var result = [];
	var newStart = "";	// strings
	var newEnd = "";

	var startStr = arr[0].split('-');		// arrays
	var endStr = arr[1].split('-');

	var startDay = startStr[2];		// strings
	var endDay = endStr[2];

	var startMonth = startStr[1];	// strings
	var endMonth = endStr[1];

	var startYear = startStr[0];	// strings
	var endYear = endStr[0];

	// special conditions
	// 1. year range < 1 = no display end year
	// 2. within 1 month = no display end (month + year + day)
	// 3. year = current & range < 1 = no display year at the beginning

	var check1 = false;
	var check2 = false;
	var check3 = false;
	var check4 = false;
	var checkSameDate = false;

	// check 1 
	if (parseInt(endYear) - parseInt(startYear) === 0) {
		// console.log("check 1");
		check1 = true;
	} 
	else if (parseInt(endYear) - parseInt(startYear) === 1 &&	
						parseInt(endMonth) <= parseInt(startMonth)) {

		// if it's same month... check days
		if (endMonth === startMonth) {
			if (parseInt(endDay) < parseInt(startDay)) {
				// console.log("check 1");
				check1 = true;
			}
		} else {
			// console.log("check 1");
			check1 = true;
		}
	}

	// check 2
	if (endYear === startYear && 
				startMonth === endMonth) {
		// console.log("check 2");
		check2 = true;
	}

	// check 3
	if (startYear === '2016' &&
				parseInt(endYear) - parseInt(startYear) === 0) {
		// console.log("check 3");
		check3 = true;
	} 
	else if (startYear === '2016' &&
				parseInt(endYear) - parseInt(startYear) === 1 &&
				parseInt(endMonth) <= parseInt(startMonth)) {

		// if it's same month... check days
		if (endMonth === startMonth) {
			if (parseInt(endDay) <= parseInt(startDay)) {
				// console.log("check 3");
				check3 = true;
			}
		} else {
			// console.log("check 3");
			check3 = true;
		}
	}

	// check same date
	if (endYear === startYear &&
				endMonth === startMonth && 
				endDay === startDay) {
		checkSameDate = true;
	}

	// begin process

	// special conditions
	// 1. year range < 1 = no display end year
	// 2. within 1 month = no display end (month + year)
	// 3. year = current & range < 1 = no display year at the beginning

	newStart += happyMonth(startMonth) + " " + happyDay(startDay);

	if (!check3) {
		newStart += ", " + startYear;
	}

	if (!check2) {
		newEnd += happyMonth(endMonth) + " ";	
	}

	newEnd += happyDay(endDay);

	if (!check1) {
		newEnd += ", " + endYear;	
	}

	// check conditions
	// if (!check3) {
	// 	newEnd += endYear;
	// }

	result.push(newStart);

	if (!checkSameDate) {
		result.push(newEnd);
	}

  return result;
}

// makeFriendlyDates(["2016-12-01", "2018-02-03"]);
// makeFriendlyDates(["2014-07-01", "2014-08-02"]);
// console.log(makeFriendlyDates(["2016-07-01", "2016-07-04"]));
// console.log(makeFriendlyDates(["2016-12-01", "2017-02-03"]));
console.log(makeFriendlyDates(["2018-01-13", "2018-01-13"]));

