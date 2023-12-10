export function duplicateEncode(word: string){
    
    type charMap = {
        [character: string] : {
            bracket: string
        }
    }

    const encoder: charMap = {};
    const lowerCaseWord = word.toLowerCase();
    for(let i=0; i<lowerCaseWord.length; i++) {
        let char = lowerCaseWord[i];
        if(char == undefined) continue;  // because typescript gives error about char being possibly undefined below
        if(Object.keys(encoder).includes(char)) continue;

        encoder[char] = lowerCaseWord.includes(char, i+1) ? { bracket: ')'} : { bracket: ')'} ;
    }

    return lowerCaseWord.split('').map(c => encoder[c]?.bracket).join();
}
