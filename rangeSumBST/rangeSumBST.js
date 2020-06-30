/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {

  //return reduce on the array, adding value to accumulator if is less than or         equal to R, greater than equal to L
  // return root.reduce((accum, value) => {
  //     if (value <= R && value >= L) {
  //         return accum + value;
  //     }
  // })
  console.log(root)


  // create result variable
  var result = 0;

  // create a helper recursive function
  var helper = (node) => {
      // check value of current node, if passes tests add to result
      if (node.val <= R && node.val >= L) {
          result += node.val
      }

      // Check if there is a left child
      // if there is, pass it into recursive function
      if (node.left) {
          helper(node.left);
      }

      // check if there is a right child
      // if there is, pass it into recursive function
      if (node.right) {
          helper(node.right);
      }

  }

  // run recursive function on root
  helper(root);
  // return result
  return result;
};