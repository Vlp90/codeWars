// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

const whatCentury = (year) => {

    let x = ""
    if (year=== "1000" || year === "2000") {
        x = Math.floor(year/100);
    } else {
        x = Math.floor(year/100) + 1;
    }


    if (x == 31 || x == 21 || x == 1) return x + "st";
    else if (x == 22 || x == 2) return x + "nd";
    else if (x == 23 || x == 3) return x + "rd";
    else return x + "th";
    return x; 
}

console.log(whatCentury("2000"))