const multiplyAndFilter = (array, multiplier) => {
  let filteredArray = array.filter(word => typeof word === "number");
  console.log(filteredArray)
  let result = filteredArray.map(number => number * multiplier)
  return result
// console.log(result)
};

multiplyAndFilter([1, 2, 3,], 2);
