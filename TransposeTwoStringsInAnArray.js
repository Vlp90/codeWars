// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be

transposeTwoStrings = (arr) => {

    var result = [];
    var len = Math.max(arr[0].length, arr[1].length);

    console.log(result)
    console.log(len)

    for (let i = 0 ; i < len; i++) {
        let column = (arr[0][i] || " ") + " " + (arr[1][i] || " ");
        result.push(column);
    }

    console.log(result.join("\n")) 

}

transposeTwoStrings(['Hello','World']);