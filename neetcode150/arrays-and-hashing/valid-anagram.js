var isAnagram = function(s, t) {
    return getSortedString(s) == getSortedString(t) 
};

function getSortedString(str) {
    return str.split('').sort().join(); 
}
