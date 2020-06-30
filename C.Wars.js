// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

// See the pattern below:

// initials('code wars') => returns C.Wars
// initials('Barack Hussain obama') => returns B.H.Obama

const initials = (name) => {
  let splitName = "";
  let result = "";
  let lastWord = "";
  let initialWords = [];

  splitName = name.split(" ");

  initialWords = splitName.map((element) => {
    return element[0].toUpperCase();
  });

  initialWords.pop();

  lastWord = splitName[splitName.length - 1];
  lastWord = lastWord.charAt(0).toUpperCase() + lastWord.slice(1);

  result = initialWords.join(".") + "." + lastWord;

    // console.log(splitName);
    // console.log(initialWords);
    // console.log(lastWord);

    // console.log(result);

  return result;
};

console.log(initials("vladimir John leloup"));
