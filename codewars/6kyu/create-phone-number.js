// link: https://www.codewars.com/kata/525f50e3b73515a6db000b83
// date: 2024-04-05

function createPhoneNumber(numbers){
  return numbers.reduce((string, x, i) => {
      switch(i) {
          case 0: 
              return '(' + x; 
              break;
          case 2:
              return string + x + ') ';
              break;
          case 5:
              return string + x + '-';
              break;
          default:
              return string + x;
      }
  }, '')  
}
