function dirReduc(arr){
    const oppositeDir = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST: "WEST",
        WEST: "EAST"
    }

    const arrCopy = [...arr];
    let i = 0;
    while(i < arrCopy.length - 1) {
        if(oppositeDir[arrCopy[i]] == arrCopy[i+1]) {
            arrCopy.splice(i,2);
            i--;    // move back by 1 because above removal may have made 
                    // another removal possible between i-1 and new i
        } else i++; // because if array elements are removed, 
                    // new elements will be at index i so don't skip them accidentally
    }
    return arrCopy;
}

