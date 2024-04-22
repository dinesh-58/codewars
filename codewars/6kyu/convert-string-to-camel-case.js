// link: https://www.codewars.com/kata/517abf86da9663f1d2000003
// date: 2024-04-22

// char at match[0] will be separator,
// match[1] will be letter

function toCamelCase(str){
    return str.replace(/-[a-zA-Z]?|_[a-zA-Z]?/g, match =>
        match[1].toUpperCase()
    );
}
