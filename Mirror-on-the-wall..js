// Mirror, mirror, on the wall...
// You get a list of integers, and you have to write a function mirror that returns the 'mirrored'
// (or symmetric) version of this list, i.e. the middle element is the greatest, then the next greatest on both sides,
// the the next greatest, and so on...

// The list will always consist of integers in range < -1000, 1000 > and will vary in size between 0 and 10000.
// Your function should not mutate the input array, and this will be tested ( where applicable ).
// Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

let mirror = (data) => {
  let copy = data.slice();

  let dataSort = copy.sort((a, b) => a - b);

  let reverse = [...dataSort].reverse().splice(1);

  let result = dataSort.concat(reverse);

  return result;
};

console.log(mirror([-8, 42, 18, 0, -16]));
