// Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
// and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

const capitalize = (string) => {
    let result = []
  let output = "";
  let output2 = "";

  for (let i = 0; i < string.length; i++) {
    if (i % 2 == 0) {
      output += string[i].toUpperCase();
      //   console.log(output);
    } else {
      output += string[i].toLowerCase();
      // console.log(output);
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (i % 2 == 0) {
      output2 += string[i].toLowerCase();
      //   console.log(output);
    } else {
      output2 += string[i].toUpperCase();
      // console.log(output);
    }
  }
//   console.log([output, output2]);
  result.push(output)
  result.push(output2)

//   console.log(result)
return result
};

capitalize("hello");
capitalize("codewarriors");
