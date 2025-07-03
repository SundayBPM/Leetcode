class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function arrayToListNode(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
}

// Buat list node dari array
var l1 = arrayToListNode([2, 4, 3]);  // merepresentasikan angka 342
var l2 = arrayToListNode([5, 6, 4]);  // merepresentasikan angka 465


const addTwoNumbers = (l1, l2) => {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    // console.log(`ini list nodenya = ${dummy}`)
    // console.log(dummy)
    console.log(l1)

    // while (l1 || l2 || carry) {
    //     let val1 = l1 ? l1.val : 0;
    //     let val2 = l2 ? l2.val : 0;
    //     let sum = val1 + val2 + carry;

    //     carry = Math.floor(sum / 10);
    //     current.next = new ListNode(sum % 10);
    //     current = current.next;

    //     if (l1) l1 = l1.next;
    //     if (l2) l2 = l2.next;
    // }

    // return dummy.next;
}

addTwoNumbers(l1,l2)