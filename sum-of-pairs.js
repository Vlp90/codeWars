// Given a list of integers and a single sum value,
// return the first two values (parse from the left please) in order of appearance that add up to form the sum.

const sum_pairs = (ints, s) => {
    // const { length } = ints;

  for (let i = -1; i < ints.length; i++) {
      console.log("ints[i]", ints[i])
    for (let j = 0; j < i; j++) {
        console.log("ints[j]",ints[j])
      if (ints[i] + ints[j] === s) {
          return [ints[j], ints[i]];
        }
    }
  }

};

console.log(sum_pairs([10,5,2,3,7,5], 10));
