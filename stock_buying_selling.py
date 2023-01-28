
def solution(prices):
    # Type your solution here
    # The problem is that if an array [prices] represents the prices of a stock per day
    # What is the biggest margin of interest you can have for a given set of prices
    # Provided you have to buy before selling
    min_price = 0
    max_price = 0
    
    if len(prices):
        while True:
            min_price = min(prices)
            max_price = max(prices)
            if prices.index(min_price) > prices.index(max_price):
                prices.remove(max_price)
            else:
                break
    else: 
        return 0

    return max_price - min_price