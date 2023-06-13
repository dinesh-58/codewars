// link: https://www.codewars.com/kata/54d7660d2daf68c619000d95/
// completed date: Incomplete. attempted on 13 jun 2023
// errors: fails on random tests. further debugging needed 

function convertFrac(lst){
    /*
     * example: 
     * input = [ [1, 2], [1, 3], [1, 4] ]  // 2d array
     * output = "(6,12)(4,12)(3,12)"  // string
    */

    // TODO later: rewrite using higher-order function? check notes
    // TODO : could prob make this simpler by storing just denominators in new array

    let lcm = 1;
    let factors = [2, 3, 5, 7];
    const denominators = [];
    lst.forEach(fraction => denominators.push(fraction[1]));
    // TODO could prob use map below this somewhere?
    factors.forEach(factor => {
        var isValidFactor = false;
        for(let i in denominators) {
            if (denominators[i] % factor === 0) {
                denominators[i] /= factor; 
                isValidFactor = true;
            }
        }
        if(isValidFactor) lcm *= factor;
    });
    denominators.forEach(denom => lcm *= denom);

    for(let i in lst) {
        lst[i][0] *= lcm / lst[i][1];
        lst[i][1] = lcm;
    }
    let output = "";
    // could use that function that returns 1 value from array using all values
    lst.forEach(fraction => output += `(${fraction[0]},${fraction[1]})`);
    return output;
}
