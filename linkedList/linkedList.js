const Node = require('../sinlgeNodeDS/singleNode');

class InputError extends Error {


    constructor(message) {
        super(message);
        this.name = "InputError";
    }


}


class LinkedList {


    constructor(head=null){
        this.head = head;
    }


    insert(value){
        if(!this.head){
            this.head = new Node(value);
            return;
        } else {
            let previousHead = this.head;
            this.head = new Node(value);
            this.head.next = previousHead;
        }
    }


    show(){
        if(!this.head){
            return `This is an empty list`;
        }
        let currentNode = this.head;
        let valueArr = [];
        while(currentNode !== null){
            valueArr.push('{'+ currentNode.value +'} ->');
            currentNode = currentNode.next;
        }
        let stringList = valueArr.join(' ').toString()
        
        return `${stringList} null`;
    }


    addToEnd(value){
        if(this.head === null){
            this.head = new Node(value);
            return;
        }

        let currentNode = this.head;
        
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value);
    }


}


module.exports = LinkedList;