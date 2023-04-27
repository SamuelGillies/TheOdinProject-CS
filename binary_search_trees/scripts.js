class Node {
    constructor(value, left = null, right = null) {
        this.data = value; 
        this.left = left; 
        this.right = right; 
    }
}

class Tree {
    constructor(array) {
        this.root = this.sortEdit(array); 
    }

    sortEdit(array) {
        let arraySorted = []; 
    
        mergeSort(array).forEach((item) => { 
            if (!arraySorted.includes(item)) {
                arraySorted.push(item); 
            }
        }); 
    
        return this.buildTree(arraySorted); 
    }

    buildTree(array) {
        if (array.length === 0) { return null }; 
        
        let mid = Math.floor((array.length)/2); 
        let node = new Node(array[mid]); 
        node.left = this.buildTree(array.slice(0, mid)); 
        node.right = this.buildTree(array.slice(mid + 1)); 

        return node; 
    }

    insert(root, data) {
        let newNode = new Node(data);
        
        if (!root) {
            root = newNode;
            return;
        }

        let prev = null;
        let temp = root;

        while (temp) {
            if (temp.data > data) {
                prev = temp;
                temp = temp.left;
            }
            else if (temp.data < data) {
                prev = temp;
                temp = temp.right;
            }
        }

        if (prev.data > data)
            prev.left = newNode;
        else
            prev.right = newNode;

    }

    delete(root, data) {
 
        if (root == null)
            return root;
 
        if (root.data > data) {
            root.left = this.delete(root.left, data);
            return root;
        } else if (root.data < data) {
            root.right = this.delete(root.right, data);
            return root;
        }
 
        if (root.left == null) {
            let temp = root.right;
            return temp;
        } else if (root.right == null) {
            let temp = root.left;
            return temp;
        }
 
        else {                                  // If both children exist
            let succParent = root;
            let succ = root.right;
 
            while (succ.left != null) {
                succParent = succ;
                succ = succ.left;
            }
 
            if (succParent != root) {
                succParent.left = succ.right;
            } else {
                succParent.right = succ.right;
            }
 
            root.data = succ.data;
 
            return root;
        }
    }
}

function mergeSort(array) {
    if (array.length === 0) return 'not a valid array'; 
    if (array.length === 1) return array; 
    
    let midPoint = Math.floor(array.length / 2); 
    let left = array.slice(0, midPoint); 
    let right = array.slice(midPoint); 

    left = mergeSort(left); 
    right = mergeSort(right); 

    return merge(left, right); 
    
}

function merge(left, right) {
    let merged = []; 
    let i = 0; 
    let j = 0; 

    while ((i < left.length) && (j < right.length)) {
        if (left[i] < right[j]){ 
            merged.push(left[i]);
            i++; 
        } else {
            merged.push(right[j]); 
            j++; 
        }
    }
    merged = merged.concat(left.slice(i)).concat(right.slice(j));

    return merged;
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]); 

console.log(tree); 
prettyPrint(tree.root); 
tree.insert(tree.root, 35); 
tree.delete(tree.root, 67); 
prettyPrint(tree.root); 

