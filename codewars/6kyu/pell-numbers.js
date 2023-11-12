const numbers = {};

function pell(n) {
	// input n is a Number
	// return a BigInt

    if (n <= 0) return 0n;
    if (n == 1) return 1n;

    n = BigInt(n)
    const multiplier = numbers[n-1n] == undefined ? pell(n-1n): numbers[n-1n];
    const adder      = numbers[n-2n] == undefined ? pell(n-2n): numbers[n-2n];

    return 2n * multiplier + adder;
}
