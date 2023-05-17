// link: https://www.codewars.com/kata/515e271a311df0350d00000f
// completed date: 16 may 2023

function squareSum(numbers){
  let sum = 0;
  numbers.forEach( num => sum += num**2);
  return sum;
}
