/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    var result = new Array(n).fill(0);
    
    if (n % 2 != 0) {
        var counter = -1 * (n - 2);
        for (var i = 0; i < n; i ++) {
            if (i !== Math.floor(n / 2)) {
                result[i] = counter;
                counter += 2;   
            }
        }
    } else {
        var counter = -1 * (n)
        for (var i = 0; i < n; i ++) {          
            if (i === (n / 2)) {
                counter += 2
            }
            result[i] = counter;
            counter +=2;
        }
    }
    
    return result;
};