// Define a method hello that returns "Hello, Name!" 
// to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for 
// user typos to return a name with a first capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String


// const hello = (name) => {

// if (name === '' || name === undefined) {
//     return "Hello, World!"
// } else {
//     let firstLetterUpperCase = name[0].toUpperCase()
//     let resteName = name.slice(1, name.length).toLowerCase()
//     let result = firstLetterUpperCase + resteName 
    
// return `Hello, ${result}!`
//  }

// }

// Other Answer
const hello = (name) => {
return (name === '' || name === undefined) ? 'Hello, World!' : `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().substr(1)}!`;

}

console.log(hello("johN"))
console.log(hello("alice"))
console.log(hello())