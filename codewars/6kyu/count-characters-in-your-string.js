// link: https://www.codewars.com/kata/52efefcbcdf57161d4000091
// completed date: 3 may 2023

function count(string) {
    let charCount = {};
    string.split('').forEach( char => {
      charCount[char] === undefined ? charCount[char] = 1 : charCount[char]++;
    })
  return charCount;
}
