function arrayMaxConsecutiveSum(inputArray, k) {
  var results = [];

  for (var i = 0; i < inputArray.length; i ++) {
      var num = inputArray[i];

      for (var j = i + 1; j < (k + i); j ++) {
          if (inputArray[j]) {
              num += inputArray[j]
          } else {
              break;
          }
      }
      if (!isNaN(num)) {
          results.push(num);
      }
  }

  return Math.max(...results);
}

