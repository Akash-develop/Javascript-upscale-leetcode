function maxProfit(prices) {
    let minPriceData = Infinity;
    let maxProfitData = 0;
    
    for (let price of prices) {
        if (price < minPriceData) {
            minPriceData = price;
        } else {
            maxProfitData = Math.max(maxProfitData, price - minPriceData); 
        }
    }
    
    return maxProfitData;
}