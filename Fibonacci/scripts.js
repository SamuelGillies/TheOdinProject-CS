
// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. 
// Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(n) {
    let array = [0, 1]; 

    if (n === 0) return [0]; 
    if (n === 1) return array; 
    if (n > 1) {
        for (i = 2; i < n; i++) {
            array.push(array[i-2] + array[(i-1)]); 
        }
    return array; 
    }
}

console.log(fibs(10)); 

// Now write another method fibsRec which solves the same problem recursively.

function fibsRec(n, array = [0, 1]) {
    if (n < 1) return [0]; 
    if (n === 1) return [0,1]; 
    if (n === 2) {
        return array; 
    } else {
        array.push(array[(array.length - 1)] + array[(array.length - 2)]);
        return fibsRec(n-1, [...array]);
    }
}

console.log(fibsRec(8)); 

//Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

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
    console.log(left.slice(i));
    merged = merged.concat(left.slice(i)).concat(right.slice(j));

    return merged;
}

console.log(mergeSort([0, 2, 4, 3, 2, 3, 4, 5]));
console.log(mergeSort([0]));
console.log(mergeSort([-3]));
console.log(mergeSort([]));