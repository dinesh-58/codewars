var productExceptSelf = function(nums) {
    const product = [];
    for(i in nums) {
        // test performance results when temporarily setting nums[i] = 1 instead of checking condition below
        // 2nd idea: just use nested for loop and continue; if i == j
        product.push(nums.reduce((acc, x, j) => 
            i == j ? acc  : acc * x 
        , 1));
    } 
    return product;
};
