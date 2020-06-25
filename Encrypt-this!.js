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

// console.log("Bonjour Vladimir")

// convert 1er letter to charCod...
// reverse 2d letter with the last

const encryptThis = (sentence) => {


  let firstLetter = sentence.charCodeAt(0);
  let secondLetter = sentence[1];
  let lastLetter = sentence[sentence.length - 1];
  let middleSentence = sentence.substring(2, sentence[sentence.length -1]);
    console.log(middleSentence)
  // let switchLetters =

//   console.log(reverseSecondLetter);
//   console.log(reverseLastLetter);
  

  ecryptedString = firstLetter + lastLetter + middleSentence + secondLetter
console.log(ecryptedString);
};

encryptThis("hello world");
