// link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc
// completed date: 1 may 2023

function findOutlier(integers){
    let evenNumbers=[], oddNumbers=[];
    for(let i=0; i<integers.length; i++) {
        integers[i]%2 === 0 ? evenNumbers.push(integers[i]) : oddNumbers.push(integers[i]);
        if (i<2) continue;
        if (evenNumbers.length > oddNumbers.length && oddNumbers.length > 0) return oddNumbers.pop();
        if (oddNumbers.length > evenNumbers.length && evenNumbers.length > 0) return evenNumbers.pop();
    }
}
