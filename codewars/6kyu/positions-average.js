function posAverage(s) {
    s = s.split(', ')
    console.log(s);
    let commonPosCount = 0; 
    /* NOTE: to get correct answer, set totalPositions = C(s.length, 2) * s[0].length instead
     * where C represents combinations. something like math.js implements math.combinations()
    */
    //const totalPositions = s.length * s[0].length;  
    
    // do dumb way for now. comparing each string and character
    s.forEach((str, i) => {
        for(let j = i+1; j < s.length; j++) {
            for(const k in str) {
                if(str[k] === s[j][k]) commonPosCount++;
            }
        }
    });

    console.table({commonPosCount, totalPositions})
    return ((commonPosCount / totalPositions) * 100).toFixed(10);
}

