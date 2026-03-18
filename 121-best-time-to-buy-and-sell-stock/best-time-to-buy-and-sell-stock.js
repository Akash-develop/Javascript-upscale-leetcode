/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Update minimum price
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }

        // Calculate profit
        let profit = prices[i] - minPrice;

        // Update max profit
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};