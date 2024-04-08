// link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
// date: 2024-04-08

// TODO: do both iterative & recursive
function persistence(num) {
    let count=0, remaining = num; 
    while(remaining >= 10) {
        remaining = multiplyDigits(remaining);
        count++;
    }
    return count;
}

function multiplyDigits(n) {
    return n.toString().split('').reduce((prod, x) => Number(prod) * Number(x));
}
