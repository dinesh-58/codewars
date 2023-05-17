// link: https://www.codewars.com/kata/530e15517bc88ac656000716
// completed date: 10 may 2023

function increment13(unicode) {
    let firstLetter, lastLetter;
    if (unicode >= 65 && unicode <= 90) firstLetter = 65, lastLetter = 90; 
    else if (unicode >= 97 && unicode <= 122) firstLetter = 97, lastLetter = 122; 
    else return unicode;

    let diff = lastLetter - unicode;
    return (diff >= 13 ? unicode + 13 : firstLetter + 13 - diff -1);

}
function rot13(message) {
    let unicode;
    let converted = message.split('');
    converted.forEach((char, i) => {
        unicode = char.charCodeAt();
        converted[i] = String.fromCharCode(increment13(unicode));
    })
    return converted.join('');
}

