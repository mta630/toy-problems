/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    var asc = arr.slice().sort((a, b) => a - b);
    
    var ascInc = asc[1] - asc[0];
    var result = true;
    
    for (var i = 0; i < asc.length; i ++) {
        if (asc[i+1]) {
            if (asc[i+1] - asc[i] === ascInc) {
                result = true;
            } else {
                result = false;
                break;
            }
        }
    }
    return result;
};