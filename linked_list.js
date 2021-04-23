class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(head){
        this.head = head;
    }
    add(value){
        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while (current.next != null) {
           current = current.next ;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const mBondhon = new LinkedList(head);

mBondhon.add(280);
mBondhon.add(258);
mBondhon.add(580);
mBondhon.add(50);
console.log(JSON.stringify(mBondhon))