var topKFrequent = function (nums, k) {
    // 1st, just store no. of occurences of numbers
    const repeatCount = {};
    nums.forEach(n => {
        if (repeatCount[n] == undefined) repeatCount[n] = 1;
        else repeatCount[n]++;
    })

    const sortedRepeatCount = Object.values(repeatCount).sort((a,b) => b-a);
    const repeatNums = [];

    for (let i = 0; i < k || i < sortedRepeatCount.length; i++) {
        repeatNums.push(Object.keys(repeatCount).indexOf(sortedRepeatCount[i]));
    }
    return repeatNums;
};
