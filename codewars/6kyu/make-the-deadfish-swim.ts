/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
    const output: number[] = [];
    let value = 0;
    // idso
    for(const x of data) {
          x == 'i'? value++
        : x == 'd'? value--
        : x == 's'? value*=value
        : x == 'o'? output.push(value)
        : value; // does nothing;
    }
    return output;
}
