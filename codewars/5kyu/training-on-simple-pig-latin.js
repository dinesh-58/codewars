console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))

function pigIt(str){
    let firstLetter;
    newStr = str.split(' ');
    newStr.forEach((s, i) => {
        if ( s != undefined  && (firstLetter = /\w/.exec(s)) != null) {
            newStr[i] = s.substring(1) + firstLetter[0] + 'ay'
        }
    });
    return newStr.join(' ');
}
