/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  var result = 0;

  nums.forEach((num) => (num + '').length % 2 === 0 ? result++ : null)
  return result;
};