function digitalRoot(n) {
    let remainingNum = n;
    let sum = 0;
    while(remainingNum != 0) {
        sum += remainingNum % 10;
        remainingNum = Math.floor(remainingNum / 10);
    }
    if(sum.toString().length > 1) sum = digitalRoot(sum);
    return sum;
}

