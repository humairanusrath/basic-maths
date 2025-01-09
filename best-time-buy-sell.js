function maxProfit(prices){
    let buy = prices[0];
    prices[0] = 0;
    let profit = 0;
    for (let i=1; i<prices.length; i++){
        if (buy >prices[i]){ //If the current day's price (prices[i]) is lower than the current buy price

            buy = prices[i]; //this updates the buy price to the current day's lower price.
        } else {
            profit = Math.max(profit[i] -buy, profit); //prices[i] - buy calculates the profit if you sold the stock on the i-th day after buying at the buy price.
            // Math.max() ensures that profit is updated to the maximum possible profit.
        }
    }
return profit;
}