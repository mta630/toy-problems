var destCity = function(paths) {
    var mem = {};
    var mem2 = {};
    
    paths.forEach((arr, i) => {
        if (mem[arr[1]]) {
            mem[arr[1]] += 1;
        } else {
            mem[arr[1]] = 1;
        }
        
        if (mem2[arr[0]]) {
            mem2[arr[0]] += 1;
        } else {
            mem2[arr[0]] = 1;
        }
    })

    for (key in mem) {
        if (mem2[key]) {
            if (mem[key] + mem2[key] === 1) {
                return key;
            }   
        } else {
            if (mem[key] === 1) {
                return key;
            }
        }
    }
};