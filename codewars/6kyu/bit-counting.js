// link: https://www.codewars.com/kata/526571aae218b8ee490006f4
// date: 2024-04-06

var countBits = function(n) {
    let dividend = n, count = 0;
    do {
        if (dividend % 2 === 1) count++;
    } while((dividend = Math.floor(dividend / 2)) !== 0)
    return count;
};
