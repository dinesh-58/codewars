export function spinWords(words: string): string {
    const separateWords = words.split(' ')
    for (const i in separateWords) {
        if(separateWords[i].length > 4) 
            separateWords[i] = separateWords[i].split('').reverse().join('');
    }
    return separateWords.join(' ');
}

