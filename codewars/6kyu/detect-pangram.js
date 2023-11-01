function isPangram(string){
    // doing this in a dumb way for now. doesn't matter    
    // object with a-z

    const letters = {};
    for(let i = 97; i < 123; i++) {
        // create object with keys from a to z
          // alternatively, you can also just use an array and use https://stackoverflow.com/a/3954451 instead of delete
        letters[String.fromCharCode(i)] = null;
    }

    for(const x of string) {
        if(x.toLowerCase() in letters) {
            delete letters[x.toLowerCase()];
        }
        // early return if long string has already met pangram condition before looping through entire string
        if (Object.keys(letters).length == 0) return true;
    }

    return Object.keys(letters).length == 0;

    // there's prob a regex way to do this
}
