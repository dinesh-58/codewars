export function inArray(a1: string[], a2: string[]): string[] {
    return a1.filter((subString: string) => {
        return a2.some((fullString: string) => fullString.includes(subString))
    }).sort();
}
