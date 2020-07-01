var getDecimalValue = function(head) {
    var arr = [];
    
    const helper = (node) => {
        arr.push(node.val);
        if (!node.next) {
            return;
        } else {
            helper(node.next);
        }
    }
    helper(head);
    
    arr.reverse()
    arr.forEach((x, i) => {
        if (x === 1) {
            arr[i] = Math.pow(2, i); 
        }
    })
    return arr.reduce((a, b) => a + b)
};