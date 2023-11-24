import { MORSE_CODE } from './preloaded';
// module is provided in codewars. install npm package or something to run locally?
export function decodeMorse(morseCode: string): string {
    const words = morseCode.trim().split('   ').map(morseWord => morseWord.split(' ').reduce((result, letter) => result + (MORSE_CODE[letter] || ''), ''))
    return words.join(' ')                                     
}
