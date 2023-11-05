function comp(array1, array2) {
    array1.every(a => {
        // a^2 must occur same number of times as a
        return array2.includes(a*a);
    })
}
