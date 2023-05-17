// link: https://www.codewars.com/kata/5552101f47fc5178b1000050
// completed date: 27 apr 2023

function digPow(n, p){
  let digits = String(n).split('')
  let total = 0;
  digits.forEach( digit => {
    total+= digit**(p++);
  })
  return (total % n) ? -1 : total/n;
}
