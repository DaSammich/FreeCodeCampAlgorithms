function truthCheck(collection, pre) {
  // Is everyone being true?

  var result = true;

  for (var i in collection) {
    if (!Boolean(collection[i][pre])) {
      result = false;
      break;
    }
  }


  return result;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
