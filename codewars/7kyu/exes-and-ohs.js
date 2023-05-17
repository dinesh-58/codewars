// link: https://www.codewars.com/kata/55908aad6620c066bc00002a
// completed date: 28 apr 2023

function XO(str) {
    let countX=0, countO=0;
    str.toLowerCase().split('').forEach( char => {
        char === 'x' ? countX++ : char === 'o' ? countO++ : true;
    });
    return countX === countO;
}
