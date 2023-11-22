export function validBraces(braces: string): boolean {
    const stack: string[] = [];
    const left = "({["
    const right = ")}]"

    const valid = [...braces].every((brace: string) => {
        if (left.includes(brace)) return stack.push(brace)            // if left-sided brace
            // if right-sided brace, must be opposite of brace at top of stack 
            else if(stack.at(-1) == left[right.indexOf(brace)]) return stack.pop()  
            else return false
    })

    // make sure that all left braces have found a right brace and popped
    if (valid) return (stack.length === 0);  
        else return false;
}
