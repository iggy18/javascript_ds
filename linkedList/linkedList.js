const Node = require('../sinlgeNodeDS/singleNode');

class LinkedList {
    constructor(){
        this.head = null;
    }
    insert(value){
        if(this.head === null){
            this.head = new Node(value);
            return;
        } else {
            let previousHead = this.head;
            this.head = new Node(value);
            this.head.next = previousHead;
        }
    }
    show(){
        let currentNode = this.head;
        let valueArr = [];
        while(currentNode !== null){
            valueArr.push('{'+ currentNode.value +'} ->');
            currentNode = currentNode.next;
        }
        let stringify = valueArr.join(' ').toString()
        
        return `${stringify} null`;
    }
}


module.exports = LinkedList;