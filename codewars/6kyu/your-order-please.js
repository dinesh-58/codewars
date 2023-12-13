function order(words){
    return words.split(' ').toSorted((a, b) => {
        return numInString(a) - numInString(b);
    }).join(' ');
}

function numInString(x) {
    const matchResult = x.match(/[0-9]/)[0];
    return matchResult == null ? -1 : matchResult[0];
}

console.log(order("is2 Thi1s T4est 3a"));
