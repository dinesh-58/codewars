// link: https://www.codewars.com/kata/54da539698b8a2ad76000228
// date: 2024-04-07

function isValidWalk(walk) {
    if (walk.length !== 10) return false;
    const str = walk.join();
    return str.match(/n/g)?.length == str.match(/s/g)?.length && str.match(/e/g)?.length == str.match(/w/g)?.length;
}
