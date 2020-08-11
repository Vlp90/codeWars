// In English, all words at the begining of a sentence should begin with a capital letter.
// You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.
// For example,

// input:
// "hello. my name is inigo montoya. you killed my father. prepare to die."
// output:
// "Hello. My name is inigo montoya. You killed my father. Prepare to die."

const fix = (paragraph) => {
  let result = paragraph.split(". ");
  let majWords = result.map((element) => {
    let firstLetter = element.charAt(0).toUpperCase();
    let rest = element.substring(1);
    return firstLetter + rest;
  });
  console.log(majWords)
  console.log(typeof majWords)
  return majWords.join(". ");
};

console.log(
  fix("hello. my name is inigo montoya. you killed my father. prepare to die.")
);
