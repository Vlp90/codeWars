// Given a list of numbers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// odd_or_even([0])          ==  "even"
// odd_or_even([0, 1, 4])    ==  "odd"
// odd_or_even([0, -1, -5])  ==  "even"

const oddOrEven = (array) => {

    const sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    
    // console.log(sum)

    if (sum % 2 === 0) {
        return 'even'
    } else {
        return "odd"
    }
}

console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
console.log(oddOrEven([]))

console.log(oddOrEven([0, 1, 5]))
console.log(oddOrEven([0, 1, 3]))
console.log(oddOrEven([1023, 1, 2]))


// oddOrEven([1,2,3])