/* Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

 

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    var result = arr.reduce((x, y) => x + y);  
    var largestOdd, currentCount;
    
    if (arr.length === 1) {
        return arr[0];
    }

    if (arr.length % 2 === 0) {
        largestOdd = arr.length - 1;
        currentCount = largestOdd;
    } else {
        largestOdd = arr.length;
        currentCount = largestOdd - 2;
    }

    console.log(largestOdd);

    while (currentCount > 1) {
        for (var i = 0; i < arr.length; i ++) {
            var numToAdd = arr[i];
            if (arr[i + currentCount - 1]) {
                for (var j = 1; j < currentCount; j ++) {
                    console.log("i + j = ", arr[i + j]);
                    numToAdd += arr[i + j]
                }
                console.log("numToAdd", numToAdd);
                result += numToAdd;
            } else {
                break;
            }
        }
        currentCount -= 2;
    }


    return result;

};

let test1 = [10, 11, 12];
let test2 = [7,6,8,6];

console.log(sumOddLengthSubarrays(test1));
console.log(sumOddLengthSubarrays(test2));
