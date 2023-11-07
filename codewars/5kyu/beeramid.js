// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    let levels = 0;
    let totalCost = 0;

    while(totalCost <= bonus) {
        levels++;
        totalCost += (levels ** 2) * price;
    } 
    return levels == 0 ? 0 : --levels; // decrease levels value because it will be increased one last time in loop even if false condition
}
