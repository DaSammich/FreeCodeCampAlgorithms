// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);
// var val = makeAdder(1)(2);

// console.log(val); 

function addTogether(x) {

	if (typeof x !== 'number') {
		return undefined;
	}

	else if (arguments.length > 1) {
		var args = Array.prototype.slice.call(arguments);
		var result = 0;
		for (var i in args) {

			// if one is not number, then return undefined
			if (typeof args[i] !== 'number') {
				result = undefined;
				break;
			}

			result += args[i];
		}
		return result;
	} 

	else {
		return function(y) {

				if (typeof y !== 'number') {
					return undefined;
				} else {
					return x + y;
				}
		};
	}
}
	
console.log(addTogether(2,3));
