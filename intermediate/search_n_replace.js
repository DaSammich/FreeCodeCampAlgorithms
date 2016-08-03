function myReplace(str, before, after) {

  // get the common index no matter what
  var index = str.toUpperCase().indexOf(before.toUpperCase());

  var theString = str.slice(index);
  var strUpper = theString.toUpperCase();

  if (str.charAt(index) === strUpper.charAt(0)) {
    return str.replace(before, cap(after));
  } else {
    return str.replace(before, unCap(after));
  }

}

function unCap(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
