// link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
// completed date: 17 may 2023
function duplicateCount(text){
    let result = 0;
    const lowerCaseChars = text.toLowerCase().split('');
    let repeatedChars = [];
    lowerCaseChars.forEach((char, i) => {
        if((lowerCaseChars.indexOf(char, i+1) >= 0) && (repeatedChars.indexOf(char) === -1)) {
            // run this block only if char is repeated AND hasn't been repeated previously
            result++;
            repeatedChars.push(char);
        }
    }); 
    return result;
}
