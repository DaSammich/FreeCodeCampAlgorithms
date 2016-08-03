function steamrollArray(arr) {
  // I'm a steamroller, baby

  var result = [];

  for (var i in arr) {
  	if (Array.isArray(arr[i])) {
  		result = result.concat(steamrollArray(arr[i]));
  	} else {
  		result.push(arr[i]);
  	}
  }

  return result;  
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
