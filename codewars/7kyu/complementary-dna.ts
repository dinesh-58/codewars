export class Kata {
    static dnaStrand(dna: string): string {
       return [...dna].map(x => (
             x == 'A' ? 'T'
           : x == 'T' ? 'A'
           : x == 'C' ? 'G'
           : x == 'G' ? 'C'
           : x
       )).join('')
    }
}
