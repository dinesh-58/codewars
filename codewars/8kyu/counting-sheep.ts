export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    return arrayOfSheep.reduce((count, isSheepPresent: boolean | undefined | null):number => { 
        return (isSheepPresent) ? count + 1 : count;
    }, 0)
}
