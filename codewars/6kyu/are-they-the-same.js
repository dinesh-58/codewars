function comp(array1, array2) {
    const sameLastIndex ={};
    /* 
        * this object stores { array1num : index at which its same(square) was last found }
        * includes() searches from that index onwards
        */
    return array1.every((a, i) => {
        // a^2 must occur same number of times as a
        const searchIndex = sameLastIndex[a] + 1 || 0;
        if (array2.includes(a*a, searchIndex)) {
            sameLastIndex[a] = array2.indexOf(a*a, searchIndex)
            return true; 
        }
        else return false;
    })


    // idea: sort both arrays and check index by index if arr[b] == arr[a] ** 2?
}
