export function duplicateEncode(word: string){
    
    let result = word;
    for(let i=0; i<result.length; i++) {
        let char = word[i];
        if(char=='(' || char==')' || char==undefined) continue;

        if (result.includes(char, i)) 
            result = result.replace(new RegExp(char, 'g'), ')');
        else result = result.replace(char, '(')
    }
    return result;


    // alternate idea is to create an obj like
    // {
    //      'a': {bracket: '('}
    // }
    // and then after looping thru entire string, replace characters with their bracket value.
    // would probably pass testcase with brackets in the original string
}
