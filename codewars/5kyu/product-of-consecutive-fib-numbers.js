export const productFib = (prod) => {
    // const fibSequence: number[] = [0, 1];
    // return [-1,-1,false]

    let i = 0;
    const arr = [0, 1, false];
    while(arr[0] * arr[1] < prod) {
        arr[0] = fib(i);
        arr[1] = fib(i+1);
        if(arr[0] * arr[1] == prod) {
            arr[2] = true;
            break;
        }
        i++;
        // would be easier to generate fibo numbers w/o recursion?
    } 
    return arr;
}

function fib(n){
    // use old logic from bca 3rd sem w/ extra boolean param to return arr of fibo instead?
    if(n <= 0) return 0; 
    if(n === 1) return 1;
    return fib(n-1) + fib(n-2);
}
