function findOdd(A) {
    const repeatCount = {};
    A.forEach(x => {
        if (repeatCount[x] == undefined) repeatCount[x] = 1;
        else repeatCount[x]++;
    })
    for (const i in repeatCount) {
        if(repeatCount[i] % 2 !== 0) return Number(i);
    }
}
