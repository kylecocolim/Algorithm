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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    function dfs(node, direction) {
        if (!node.left && !node.right) {
            if (direction === 'left') {
                sum += node.val
            }
        }
        if (node.left) dfs(node.left, 'left');
        if (node.right) dfs(node.right, 'right');
    }
    if (root) {
        dfs(root, 'root')
    }
    return sum;
};