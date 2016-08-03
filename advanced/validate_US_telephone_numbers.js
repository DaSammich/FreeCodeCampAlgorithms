// send the str through a bunch of tests
// to ensure that the phone number is correct
function telephoneCheck(str) {

  debugger;

  var result = false;

  if (teleTrim(str)) {
    var x = str.split(/[\s-]+/).join('');

    console.log('string is ' + x);

    x = testParen(x);

    if (Boolean(x)) {
      console.log(x + " is going into testLength()");
      result = (testLength(x));
    }

    console.log('result is ' + result);
  } else {
    console.log("failed the trim test");
  }

  return result;
}

// takes in the 1st argument (raw string)
// checks the ends of the string to make sure that
// there is no garbage for 1st and last element
// @ return boolean
function teleTrim(str) {

  // check that first / last are nums

  var regex = /\D/;

  var x = regex.test(str[0]);
  var y = regex.test(str[str.length - 1]);  

  // x or y indicates failure
  if ((x || y) && (str[0] !== '(' || str[4] !== ')')) {
    return false;
  } else {
    return true;
  }
}

// takes in a 'pure' string w/o parens after
// the number goes through testParen()
// checks to see if the 1 is added or not
// it is assumed there are no more parens now
// outputs a boolean to see if it's true
function testLength(str) {

  var length = str.length;
  var result = false;

  // should have the area code
  if (length === 11 && str[0] === '1') {
    result = true;
  } 

  if (length === 10) {
    return true;
  }

  return result;
}

// takes in a "filtered" paren string 
// a filtered string is stripped of variances
// according to the specifications of the challenge
// output the "pure string" as a result
// verifies that parens are in the right place
function testParen(str) {

  var length = str.length;
  // console.log(length);
  var result = false;


  // 10 + 2 for ea paren + 1 for 1
  if (length === 13) {

    result = true;

    if (str[0] !== '1') {
      result = false;
    } 

    if (str[1] !== '(') {
      result = false;
    }

    if (str[5] !== ')') {
      result = false;
    }

  } 
  // 10 + 2 for ea paren, or "no 1"
  else if (length === 12) {

    result = true;

    if (str[0] !== '(') {
      result = false;
    }

    if (str[4] !== ')') {
      result = false;
    }
  }

  // verify that there arn't any parens in here
  else if (length === 10 || length === 11) {
    var regex = /\D/;
    result = !(regex.test(str));
  }

  if (result) {
    // console.log(typeof str);
    var x = str.split(/[()]/).join('');
    // console.log("x is " + x);
    return x;
  } else {
    return result;
  }
}

// telephoneCheck("(555)-555-5555");
// telephoneCheck("123**&!!asdf#");
// telephoneCheck("55555555");
// telephoneCheck("1 555-555-5555");
// telephoneCheck("-1 (757) 622-7382");
// telephoneCheck("555)-555-5555");
// telephoneCheck("-1 (757) 622-7382");
telephoneCheck("(555)555-5555");