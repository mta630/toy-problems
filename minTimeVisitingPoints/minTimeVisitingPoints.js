/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    var moves = 0;  
    
    while(points.length) {
        var current = [].concat.apply([], points.splice(0,1).concat([]));
        var checker = false;

        if (!points.length) {
            break;
        }

        while (!checker) {
            if (current[0] < points[0][0]) {
                current[0] ++;
            }
            if (current[1] < points[0][1]) {
                current[1] ++;
            }
            
            if (current[0] > points[0][0]) {
                current[0] --;
            }
            if (current[1] > points[0][1]) {
                current[1] --;
            }
            
            moves ++;
            
            if (current[0] === points[0][0] && current[1] === points[0][1]) {
                checker = true;
            }
        }
        
    }
    
    return moves;
};

var test = [[1,1],[3,4],[-1,0]];

console.log(minTimeToVisitAllPoints(test));