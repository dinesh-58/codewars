function moveZeros(arr) {
    const copy = [...arr];
    let zeroCount = 0, i = 0;
    while(i < copy.length) {
        if (copy[i] === 0) {
            zeroCount++;
            copy.splice(i, 1);
        } else i++;
    }

    for(i = 0; i < zeroCount; i++ ) {
        copy.push(0)
    }
    return copy;
}
