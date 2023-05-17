// link: https://www.codewars.com/kata/5262119038c0985a5b00029f
// completed date: 30 apr 2023

function isPrime(num) {
  if(num <=1) return false; 
  let root = Math.sqrt(num);
  if(Number.isInteger(root)) return false;
  for(let i=2; i<root; i++) {
    if(num%i === 0) return false;
  }
  return true;
}
