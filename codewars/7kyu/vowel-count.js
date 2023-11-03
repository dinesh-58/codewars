function getCount(str) {
    if ((matches = str.match(/[aeiou]/g)) !== null)  return matches.length
    else return 0;
}
