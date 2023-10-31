var isValidSudoku = function(board) {
    let isValid = true;    // prob bad practice but the things we do for optimization
    // TODO: set this to default false and set to true at end if all checks pass


    // check row
        // no need to check if 9 < number < 0. only check for dot and duplicate
    board.forEach(row => {
        checkRepeat(row)
    });

    // check col
    for(let j = 0; j < 9; j++) {
        for (let i = 0; i < 9; i++) {
            board[i][j]
            // store in temp array and pass to checkRepeat() ?
        }
    }
    // check 3x3 box
};

function checkRepeat(table) {
    const numCount = {}    
    for (let i = 1; i < 10; i++) {
        numCount[i] = 0;
    }
    table.every(x => x == '.' || numCount[x]++ == 0)
}
