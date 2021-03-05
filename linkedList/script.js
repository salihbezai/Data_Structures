class ListNode{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }
    size(){
        let count = 0;
        let node = this.head
        while(node){
            count++;
            node = node.next
        }
        return count;
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(69)
node1.next = node2
node2.next = node3

// linked list
let list = new LinkedList(node1)
