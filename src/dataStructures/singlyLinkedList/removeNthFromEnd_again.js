/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let ptr = head;
    let count = 1;
    while(ptr && ptr.next) {
        ptr = ptr.next.next;
        count += 2;
    }
    if(!ptr) count--;
    if(n === count) return head.next;

    count = count - n - 1;
    ptr = head;
    while(count--) {
      ptr = ptr.next;
    }
    ptr.next = ptr.next.next;
    return head;
 }