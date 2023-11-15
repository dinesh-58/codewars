export function spinWords(words: string): string {
    return words.replace(/[a-zA-Z]{5,}/g,
                         match => match.split('').reverse().join(''))
}

