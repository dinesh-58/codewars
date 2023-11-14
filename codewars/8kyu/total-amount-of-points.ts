export function points(games : string[]): number {
    return games.reduce((points: number, curResult: string): number => {
        const [a, b] = curResult.split(':');
        // since score is always single digit, we can just do string comparison instead of typecasting to number
        return (a > b) ? points + 3 : (a == b) ? points + 1 : points;
    }, 0);
}
