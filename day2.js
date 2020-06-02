class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(node){
        // add a new node to the front of the list and move the head
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }

    isEmpty(){
        if (this.head) return false;
        else return true;
    }

    addToBack(node) {
        var runner = this.head;
        while (runner) {
            if (runner.next === null) {
                runner.next = node;
                break;
            }
            else runner = runner.next;
        }
    }

}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var mySLL = new SLL();
console.log(mySLL.isEmpty());
var firstNode = new Node(7);
mySLL.addToFront(firstNode);
console.log(mySLL);

mySLL.addToFront(new Node(8));
mySLL.addToFront(new Node(9));
console.log(mySLL.head);
console.log(mySLL.isEmpty());

// mySLL.head.next = new Node(8);


// if a SLL head points a null?
// it's empty! no nodes

// if a Node inside of an SLL points to null?
// it's the last node!