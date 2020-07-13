// Consecutive strings

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first
// longest string consisting of k consecutive strings taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(starr, k) {
    if (k > starr.length || k < 1) {
      return "";
    } else {
      return starr.reduce(function (prevLongest, long, index, array) {
        console.log("preview : " + prevLongest);
        console.log("c :" + long);
        console.log("i :" + index);
        console.log(array);
  
        let longest = array.slice(index, index + k).join("");
        console.log('longest :' + longest)
        return longest.length > prevLongest.length ? longest : prevLongest;
      }, "");
    }
  }

console.log(
  longestConsec(
    ["zone", "abigail", "theta", "formed", "libe", "zase", "theta", "abigail"],
    2
  )
);

