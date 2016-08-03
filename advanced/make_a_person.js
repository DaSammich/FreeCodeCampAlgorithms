function Person(fullName) {

	setFullName = (fullName);

	var array = fullName.split(" ");
	var firstName = array[0];
	var lastName = array[1];
	var fullName = firstName + " " + lastName;

	this.getFullName = function() {
		return fullName;
	}

	this.getFirstName = function() {
		return firstName;
	}

	this.getLastName = function() {
		return lastName;
	}

	this.setFullName = function(happy) {
		var array = happy.split(" ");
		firstName = array[0];
		lastName = array[1];
		fullName = happy;
	}

	this.setFirstName = function(happy) {
		firstName = happy;
		fullName = happy + " " + lastName;
	}

	this.setLastName = function(happy) {
		lastName = happy;
		fullName = firstName + " " + lastName;
	}

}

// (function() {
// 	this.getFullName = function() {
// 		return this.name;
// 	};
// 	this.setFullName = function(name) {
// 		this.name = name;
// 	};
// }).call(Person.prototype);

var bob = new Person("Bob Ross");
console.log(bob.getLastName());
console.log(bob.getFirstName());
console.log(bob.getFullName());
bob.setFullName("Haskell Curry");a
console.log(Object.keys(bob));
console.log(bob.getLastName());

// console.log(bob.getFullName());
// console.log(Object.keys(bob));
// console.log(bob instanceof Person);
// console.log(bob.setFullName("mike B"));
// console.log(bob.getFullName());

// console.log(bob.getFirstName());
// console.log(bob.getLastName());
// bob.setFirstname("Haskell");
// console.log(bob.getFullName());
