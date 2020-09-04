// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique


const findUniq = (array) => {

    array.sort((a,b) => a-b)

    if (array[1] > array[0]) {
        console.log(array[0]) ;
    } else {
        console.log(array[array.length-1]);
    }

// console.log(array)   
}



findUniq([ 1, 1, 1, 2, 1, 1 ])
findUniq([ 0, 0, 0.55, 0, 0 ])