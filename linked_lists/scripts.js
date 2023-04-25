class Node {
    constructor(value, nextNode = null) {
        this.value = value || null; 
        this.nextNode = nextNode; 
    }
}

class LinkedList {
    constructor() {
        this.head = null; 
        this.length = 0; 
    }; 

    append(value) {
        let node = new Node(value); 

        if (this.head === null) {
            this.head = node; 
        } else {
            let temp = this.head; 
            while (temp.nextNode !== null) {
                temp = temp.nextNode; 
            }
            temp.nextNode = node; 
        }
        
        this.length++; 
    }

    prepend(value) {
        this.head = new Node(value, this.head); 
        this.length++; 
    }

    size() {
        return this.length; 
    }

    returnHead() {
        return this.head.value; 
    }

    tail() {
        let temp = this.head; 
        while (temp.nextNode !== null) {
            temp = temp.nextNode; 
        }
        return temp.value; 
    }

    at(index) {
        if (index < 0 && index > (this.length - 1)) { // if index is out of range
            return 'invalid index number'; 
         } else {
            let count = 0; 
            let previousNode, currentNode;
            currentNode = this.head;  
            
            while (count < index) {
                previousNode = currentNode; 
                count++; 
                currentNode = currentNode.nextNode; 
            }

            return currentNode.value; 
        }
    }

    pop() {
        let temp = this.head; 
        while (temp.nextNode.nextNode !== null) {
            temp = temp.nextNode.nextNode; 
        }
        temp.nextNode = null;  
        this.length--; 
    }

    contains(value) {
        let temp = this.head; 
        if (temp.value == value) return true; 
        while (temp.nextNode !== null) {
            temp = temp.nextNode; 
            if (temp.value == value) {
                return true; 
            }
        }
        return false; 
    }

    find(value) {
        let count = 0; 
        let temp = this.head; 
        if (temp.value == value) return 0; 
        while (temp.nextNode !== null) {
            temp = temp.nextNode; 
            count++; 
            if (temp.value == value) {
                return count; 
            }
        }
        return null; 
    }

    toString() {
        let temp = this.head; 
        console.log(temp.value); 
        while (temp.nextNode !== null) {
            temp = temp.nextNode; 
            console.log(temp.value); 
        }
    }

    insertAt(value, index) {
        if (index > 0 && index > (this.length - 1)) { // if index is out of range
            this.append(value);  
        } else if (index < 0) {
            return console.log('invalid index number'); 
        } else {
            let newNode = new Node(value); 
            let count = 0; 
            let previousNode, currentNode;
            currentNode = this.head;  
            
            while (count < index) {
                previousNode = currentNode; 
                count++; 
                currentNode = currentNode.nextNode; 
            }

            newNode.nextNode = currentNode; 
            previousNode.nextNode = newNode; 
            this.length++; 
        }
    }
    
    removeAt (index) {
        if (index > 0 && index > (this.length - 1)) {
            return; 
        } 

        let currentNode = this.head; 
        let previousNode;
        let count = 0; 
        
        if (index === 0) {
            this.head = currentNode.nextNode; 
        } else {
            while (count < index) {
                count++; 
                previousNode = currentNode; 
                currentNode = currentNode.nextNode; 
            }
            previousNode.nextNode = currentNode.nextNode;
        }
        this.length--; 
    }
}



let list = new LinkedList; 

list.prepend('200');
list.prepend('100'); 
list.append('300'); 
list.insertAt('150', 1); 
list.removeAt(2); 

// list.pop(); 

console.log(list.size()); 
console.log(list.returnHead()); 
console.log(list.tail()); 
console.log(list.at(1)); 
console.log(list.contains(300))
console.log(list.find(100))


console.log(list.toString()); 
console.log(list); 