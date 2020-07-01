/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    const getMax = (arr) => {
        return arr.reduce((a, b) => Math.max(a,b));   
    }
    
    const getIndex = (arr, max) => {
        var num;
        arr.forEach((x, i) => {
            if (x === max) {
                num = i;
            }
        })
        return num;
    }
    
    var helper = (node, left, right) => {
        
        if (left.length != 0) {
            console.log(left)
            var max = getMax(left);
            var index = getIndex(left, max);
            var newRight = left.splice(index);
            newRight.splice(0,1);
            node.left = new TreeNode(max);
            helper(node.left, left, newRight);
        }
        if (right.length != 0) {
            console.log(right);
            var max = getMax(right);
            var index = getIndex(right, max);
            var newRight = right.splice(index);
            newRight.splice(0,1)
            node.right = new TreeNode(max);
            helper(node.right, right, newRight);
        }
        
        return;
    }
    
    var a = getMax(nums);
    var i = getIndex(nums, a);
    var tree = new TreeNode(a);
    
    var l = nums;
    var r = l.splice(i);
    r.splice(0,1);
    
    helper(tree, l, r)
    return tree;
};