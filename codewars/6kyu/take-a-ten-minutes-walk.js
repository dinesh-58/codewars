// link: https://www.codewars.com/kata/54da539698b8a2ad76000228
// date: 2024-04-07

/*
function isValidWalk(walk) {
    if(walk.length !== 10) return false;
    let x=0, y=0;
    walk.forEach(dir => {
        switch(dir) {
            case 'n':
                x++; break;
            case 's':
                x--; break;
            case 'e':
                y++; break;
            case 'w':
                y--; break;
        } 
    });
    return x === 0 && y === 0;
}
*/


function isValidWalk(walk) {
    if (walk.length !== 10) return false;
    const str = walk.join();
    return str.match(/n/g).length == str.match(/s/g) && str.match(/e/g).length == str.match(/w/g);
}
