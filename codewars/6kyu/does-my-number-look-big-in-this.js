// link: https://www.codewars.com/kata/5287e858c6b5a9678200083c
// completed date: 26 apr 2023

function narcissistic(value) {
  const digits = String(value).length;
  let total = 0;
  let remaining = value;
  while(remaining !== 0) {
    total  += (remaining%10) ** digits;
    remaining = Math.trunc(remaining / 10);
  }
  return value === total;
}

