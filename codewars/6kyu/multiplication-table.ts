export function multiplicationTable (size: number): number[][] {
    const arr:number[][] = [];
    for(let i=0; i<size; i++) {
        arr[i] = []
        for(let j=0; j<size; j++) {
            arr[i][j] = (i+1) * (j+1)
        }
    }
    return arr;
}
