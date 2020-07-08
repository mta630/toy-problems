/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    var result = [];    
    
    for (var i = 0; i < n; i++) {
        var arr = new Array(m).fill(0);
        result.push(arr);
    }
    
    indices.forEach((arr) => {
        result[arr[0]].forEach((x, j) => {
            result[arr[0]][j] ++;
        })
        result.forEach((x, i) => {
            result[i][arr[1]] ++;
        })
    })
    
    var realResult = 0;
    
    result.forEach((y) => {
        y.forEach((z) => {
            if (z % 2 === 1) {
                realResult ++;
            }
        })
    })
    
    return realResult;
     
};