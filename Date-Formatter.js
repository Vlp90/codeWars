// You are to implement a getDate function, which takes a unix timestamp and a locale as
// input and returns the formatted date based on the locale.

// the locale formats to use are stored in the
// preloaded structure formats. For example,

// Example:

// getDate(1481020142, 'en-GB') -> '06/12/2016' (format->'dd/mm/yyyy')
// getDate(1481020142, 'de-DE') -> '06.12.2016' (format->'dd.mm.yyyy')
// getDate(1481020142, 'hu-HU') -> '2016. 12. 06.' (format->'yyyy. mm. dd.')

let getDate = (uts, loc) => require('moment').unix(uts).format((formats[loc] || 'DD/MM/YYYY').toUpperCase());


// const getDate = (uts, loc) => {



//     let date = new Date(uts * 1000);
//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     var year = date.getFullYear();
  
//     if (loc === "en-GB") {
//       // console.log(day);
//       // console.log(month);
//       // console.log(year);
//       return 0+ `${day}/${month}/${year}`;
//     } else if (loc === "de-DE") {
//       return 0+`${day}.${month}.${year}`;
//     } else if (loc === "en-US") {
//       return `${month}/${day}/${year}`;
//     }
//   };
  
  
  console.log(getDate(1481020142, "en-GB"));
  console.log(getDate(1481020142, "de-DE"));
  console.log(getDate(1481020142, "en-US"));