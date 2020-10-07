// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

const solution = (string) => {
  let result = "";
  string.split("").forEach((element) => {
    //   console.log(element)
    if (element == element.toUpperCase()) {
      result += " " + element;
    } else {
      result += element;
    }
  });
  return result;
};

console.log(solution("camelCasingTest"));
