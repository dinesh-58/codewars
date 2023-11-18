export function validBraces(braces: string): boolean {
    // let test input be "(){}[]".
    // for now, just solve for this
    interface braceMap {
        ')': string,
        '}': string,
        ']': string
    }
    
    const stack: string[] = [];
    // maintain left and right
    const left = "({["
    const right = ")}]"

    const mapping: braceMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    // deconstruct string and use every?
    const valid = [...braces].every((brace: ')' | '}' | ']') => {
        /* TODO: fix this. brace param can be not just right-sided braces, but left sided brace too
            *  one idea is to check if brace property exists in interface / is valid prop
            * or, scrap interface and just use  left[right.search(brace)] to get corresponding left brace for right brace
        */
        if (left.includes(brace)) return stack.push(brace)
            else if(stack.at(-1) == mapping[brace]) return stack.pop()
            else return false
    })

    if (valid) return (stack.length === 0);
        else return false;
}


// there's prob a short way to do this with reduce but eh
