// Encrypt this!
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code ("H".charCodeAt(0) donne 104).
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"
// convert 1er letter to charCod...
// reverse 2d letter with the last

const encryptThis = (sentence) => {
  if (sentence === "") {
    return "";
  } else {
    let splitSentence = sentence.split(" ");
    let mappedArray = splitSentence.map((element) => {
      let splitWords = element.split("");
      splitWords[0] = element.charCodeAt(0);
      [splitWords[1], splitWords[splitWords.length - 1]] = [
        splitWords[splitWords.length - 1],
        splitWords[1],
      ];
      return splitWords.join("");
    });
    return mappedArray.join(" ");
  }
};

console.log(encryptThis("hello world"));
