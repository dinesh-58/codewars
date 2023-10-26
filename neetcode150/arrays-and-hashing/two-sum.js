var twoSum = function(nums, target) {
    // sort in ascending order. 
    const sorted = [...nums].sort((a, b) => a - b);
    for(const i of sorted) {
        for(const j of sorted) {
            const sum = i + j;
            if(sum > target) break;
            if(sum == target) {
                if(i == j) {
                const indexI = nums.indexOf(i);
                return [indexI, nums.indexOf(j, indexI + 1)];
                } else return [nums.indexOf(i), nums.indexOf(j)];
            }
        }
    }
};
