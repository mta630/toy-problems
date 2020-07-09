/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var sorted = nums.sort((a, b) => a - b);
    var len = sorted.length;
    return (sorted[len - 1] - 1) * (sorted[len - 2] - 1);
};