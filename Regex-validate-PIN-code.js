// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// const validatePIN = (pin) => {
//     let containDigit = /^\d+$/.test(pin);
  
//       if (Number.isInteger(pin) >= 0 && containDigit && (pin.length === 4 || pin.length === 6)) {
//         return true;
//       } else {
//         return false;
//       }
//   };


// OU BIEN CETTE SOLUTION AVEC DU REGEX
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

console.log(validatePIN("125545"));
console.log(validatePIN("125545"));

console.log(validatePIN("1"));
console.log(validatePIN("12"));
console.log(validatePIN("123"));
console.log(validatePIN("12345"));
console.log(validatePIN("1234567"));
console.log(validatePIN("-1234"));
console.log(validatePIN("1.234"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("00000000"));
console.log(validatePIN("-12345"));
