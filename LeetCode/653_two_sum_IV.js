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
 * @param {number} k
 * @return {boolean}
 */
// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
var findTarget = function (root, k) {
    const arr = []
    let ret = false
    function dfs(node) {
        if (!node) return
        const ans = k - node.val
        if (arr.includes(ans)) {
            ret = true
            return
        }
        arr.push(node.val)
        if (node.left) dfs(node.left)
        if (node.right) dfs(node.right)
    }
    if (root) dfs(root);
    console.log(ret)
    return ret
};