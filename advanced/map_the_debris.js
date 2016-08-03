function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447; 				
  var avgAlt = 35873.5553;				

  // return object
  var result = [];

  for (var i = 0; i < arr.length; i++) {
  	result.push({"name" : arr[i].name, "orbitalPeriod" : orbPeriod(arr[i].avgAlt)});
  }

  return result;
}

// takes in the average altitude and returns the orbital period 
function orbPeriod(alt) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447; 				
  var avgAlt = alt;

  var x = 2 * Math.PI * Math.sqrt(Math.pow(avgAlt + earthRadius, 3) / GM);
  x = Math.round(x); 		// round it off

  return x;
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
 