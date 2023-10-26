var containsDuplicate = function(nums) {
    const distinct = [];
    return nums.some(x => {
        return (distinct.includes(x) || (distinct.push(x) && false));
    });
};
