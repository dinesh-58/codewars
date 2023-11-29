function primeFactors(n:number): any {
    let quotient = n;
    
    interface repeatedNum {
        [index: number]: number
    }

    let factorRepeat: repeatedNum = {};
    // loop until no longer possible to divide by prime?
    for(let i=2; quotient != 1; i++) {
        if(!isPrime(i)) continue;

        while(quotient % i == 0) {
            quotient /= i;
            if (factorRepeat[i] == undefined) factorRepeat[i] = 1 
                else factorRepeat[i]++  
        }
    }
    let outputString = '';
    for(const [prime, repeat] of Object.entries(factorRepeat)) {
        outputString += `(${prime}${repeat != 1 ? '**'+ +repeat : ''})`
    }
    return outputString;
}

function isPrime(num: number) {
    for(let i=2; i <= num/2; i++) {
        if(num % i == 0) return false;
    }
    return true;
}
