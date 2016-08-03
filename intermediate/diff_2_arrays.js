function diff(arr1, arr2) {
  var newArr = arr1;
  // Same, same; but different.
  
  for (var i = 0; i < arr2.length; i++) {

  	if (arr1.indexOf(arr2[i]) === -1) {
  		newArr.push(arr2[i]);
  	} 
  	// splice all of them out
  	else {
  		debugger;
  		// concurrent array modification error?
  		while (newArr.indexOf(arr2[i]) !== -1) {
				newArr.splice(newArr.indexOf(arr2[i]), 1);
  		}
  	}
  }
  
  
  return newArr;
}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
