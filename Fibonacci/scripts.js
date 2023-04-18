
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
