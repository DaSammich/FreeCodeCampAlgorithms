function where(collection, source) {
  var arr = [];
  // What's in a name?

  var key = Object.keys(source);

  for (var i in collection) {

  	var check = true;

  	for (var j in key) {

		  if (!(collection[i].hasOwnProperty(key[j]) && 
		  			source[key[j]] === collection[i][key[j]])) {
		  	check = false;
		  }	
  	}

  	if (check) {
	  	arr.push(collection[i]);
  	}
  }

  return arr;
}

console.log(where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
console.log(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));