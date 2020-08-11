// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is
// to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s) {
  let upperCaseCount = 0;
  let lowerCaseCount = 0;

  for (let i = 0; i < s.length; i++) {
    //   console.log(s[i])

    let letter = s[i];
    if (letter === letter.toUpperCase()) {
      upperCaseCount += 1;
    } else {
      lowerCaseCount += 1;
    }
  }
  console.log(upperCaseCount);
  console.log(lowerCaseCount);

  if (upperCaseCount > lowerCaseCount) {
    return s.toUpperCase();
  } else if (upperCaseCount < lowerCaseCount) {
    return s.toLowerCase();
  } else if (upperCaseCount === lowerCaseCount) {
    return s.toLowerCase();
  }
}

console.log(solve("CAZe"));
