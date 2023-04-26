class Node {
    constructor(value, left = null, right = null) {
        this.data = value; 
        this.left = left; 
        this.right = right; 
    }
}

class Tree {
    constructor() {
        this.root = null; 
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

let tree = new Tree; 

console.log(tree.sortEdit([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])); 
prettyPrint(tree.sortEdit([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])); 
