/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  var x = nums.splice(0, n);
  var y = nums;
  var result = [];

  x.forEach((num, i) => {
      result.push(num);
      result.push(y[i]);
  })

  return result;
};