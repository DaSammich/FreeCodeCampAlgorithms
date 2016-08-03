function translate(str) {

  var consonant = "bcdfghjklmnpqrstvwxz";
  var result = "";
  var changed = false;

  while (consonant.indexOf(str[0]) !== -1) {
    changed = true;
    var sliced = str.slice(0, 1);

    var split = str.split("");
    split.splice(0, 1); // remove that value
    
    var end = sliced;
    split.push(end);
    str = split.join("");
  } 

  if (changed) {
    str += "ay";
  } else {
    str += "way";
  }

  return str;
}

console.log(translate("algorithm"));
