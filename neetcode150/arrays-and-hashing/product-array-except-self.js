/* test results:
    * Case 1: 62ms
    * Case 2: 62ms
*/

var productExceptSelf = function(nums) {
    const product = [];
    for(i in nums) {
        product.push(nums.reduce((acc, x, j) => 
            i == j ? acc  : acc * x 
        , 1));
    } 
    return product;
};
