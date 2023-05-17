// link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e
// completed date: 2 may 2023

function longestConsec(strarr, k) {
    let n = strarr.length;
    let combined = [];
    let longestIndex = 0;

    if(n==0 || k>n || k<=0) return '';
    for(let i=0; i+k <= strarr.length; i++) {
        combined[i] = '';
        for(let j=i; j-i < k; j++) {
            combined[i] += strarr[j];
        }
        if(combined[i].length > combined[longestIndex].length) longestIndex = i;
    }
    return combined[longestIndex];
}
