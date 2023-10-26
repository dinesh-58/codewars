var groupAnagrams = function(strs) {
    strs.forEach((str, i) => {
        const anagrams = [str];
        let j = i + 1;
        while (j < strs.length) {
            if (isAnagram(str, strs[j])) {
                anagrams.push(strs[j]);
                strs.splice(j, 1);
            }
            else j++; // if element at j has been removed (spliced),
                // we need to check new element at index j
               //
        }
        strs[i] = anagrams
    })
    return strs;
};

function isAnagram(a, b) {
    if (a.length != b.length) return false;
    // return a.split('').sort().join('') == b.split('').sort().join('');
    return getSortedString(a) == getSortedString(b);
}

function getSortedString(str) {
    return str.split('').sort().join('')
}
