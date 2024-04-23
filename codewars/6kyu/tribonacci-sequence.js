// link: https://www.codewars.com/kata/556deca17c58da83c00002db
// date: 2024-04-23

function tribonacci(signature,n){
    if(n < 4) return signature.slice(0, n);
    
    let seq = [...signature];
    for(let i=3; i<n; i++) {
        seq.push(seq.at(-1) + seq.at(-2) + seq.at(-3));
    }
    return seq;
}
