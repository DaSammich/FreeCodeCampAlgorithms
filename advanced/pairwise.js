// uses n^2 algorithm to find the soln...
function pairwise(arr, arg) {

  var blacklist = [];
  var total = 0;

  debugger;

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] <= arg) {

      var complement = arg - arr[i];

      var save = arr[i];  // save 
      arr[i] = NaN;       // temp disable that element

      var compInd = arr.indexOf(complement);  // then get the next one

      arr[i] = save;      // restore so no duplicates can occur

      // ~3 conditions
      // 1. the complement exists in the array
      // 2. the complement is not blacklisted
      // 3. the complment is not the same index as current element

      if (arr.indexOf(complement) !== -1 &&
            compInd !== i &&
            compInd !== -1) {

        arr[i] = NaN;
        arr[compInd] = NaN;

        total += i;
        total += compInd;
      }

    } 

  }

  console.log(total);
  return total;
}

pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4);
pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([], 100);