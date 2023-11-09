/*
"466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"
    =>  26.6666666667)
"444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490"
    => 29.2592592593)
*/
    
// const test = "466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"
const test = "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490";
// const test = "6900690040, 4690606946, 9990494604"
console.log(posAverage(test))
// NOTE: comparison is being repeated. i.e. s[1] is compared w/ s[2] then s[2] is being compared with s[1]

function posAverage(s) {
    s = s.split(', ')
    console.log(s);
    let commonPosCount = 0; 
    const totalPositions = s.length * s[0].length;  
    // all strings in testcases will have same length so we can just multiply (no. of strings) by (length of any string)
    // do dumb way for now. comparing each string and character
    s.forEach((str, i) => {
        // need another loop here for comparing with all otgher strings
        for(let j = i+1; j < s.length; j++) {
            for(const k in str) {
                if(str[k] === s[j][k]) commonPosCount++;
            }
        }
    });

    console.table({commonPosCount, totalPositions})
    return ((commonPosCount / totalPositions) * 100).toFixed(10);
}
