// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

const sortArray = (array) => {

    tab = [];
  
    array
      .filter((v, i) => v % 2 && tab.push(i))
      .sort((a, b) => a - b)
      .forEach((v, i) => (array[tab[i]] = v));
  
    return array;
  };

console.log(sortArray([5, 3, 2, 8, 1, 4]));
