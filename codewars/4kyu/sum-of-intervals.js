function sumIntervals(intervals) {
    const mergedIntervals = [...intervals];
 
    let isISpliced;
    let i=0, j;
    while(i < mergedIntervals.length) {
    // for(let i=0; i<mergedIntervals.length; i) {
        j = i+1;
        isISpliced = false;
        // for(let j=i+1; j<mergedIntervals.length; j) {
        while(j < mergedIntervals.length) {
            // no overlap
            if(mergedIntervals[i][1] < mergedIntervals[j][0] || mergedIntervals[i][0] > mergedIntervals[j][1]) {
                j++;
                continue;
            }

            // full overlap: j inside i
            else if(mergedIntervals[i][0] <= mergedIntervals[j][0] && mergedIntervals[i][1] >= mergedIntervals[j][1]) {
                mergedIntervals.splice(j, 1);
                // don't increment j
                continue;
            }
            // full overlap: i inside j
            else if(mergedIntervals[i][0] >= mergedIntervals[j][0] && mergedIntervals[i][1] <= mergedIntervals[j][1]) {
                mergedIntervals.splice(i, 1);
                j++;
                isISpliced = true; 
                break; // break because value at index i will change so no use comparing
            }
            // partial overlap: i, then j
            else if(mergedIntervals[i][0] <= mergedIntervals[j][0] && mergedIntervals[i][1] >= mergedIntervals[j][0] || mergedIntervals[j][0] <= mergedIntervals[i][0] && mergedIntervals[j][1] >= mergedIntervals[i][0]) {
                mergedIntervals[i] = [
                    Math.min(mergedIntervals[i][0], mergedIntervals[j][0]),
                    Math.max(mergedIntervals[i][1], mergedIntervals[j][1])
                ];
                mergedIntervals.splice(j, 1);
                isISpliced = true; // fixes overlapping intervals but increases time complexity
            }
        }
        if (!isISpliced) i++;
    }

    return mergedIntervals.reduce((sum, x) => sum + x[1] - x[0], 0);
}


