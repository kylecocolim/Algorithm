/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// https://leetcode.com/problems/palindrome-linked-list/
var isPalindrome = function (head) {
    const arr = [];
    while (head) {
        arr.push(head.val)
        head = head.next;
    }
    const left = Math.floor(arr.length / 2), right = arr.length % 2 === 0 ? left : left + 1
    return arr.slice(0, left).join(",") === arr.slice(right,).reverse().join(",")

};