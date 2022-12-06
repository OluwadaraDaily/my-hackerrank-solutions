function generateInterest(principal, interestRate, duration, interestType) {
    switch(interestType) {
      case 'simple':
        const simpleInterest =  Number(principal) * (Number(interestRate) / 100) * (Number(duration) / 360);
        return simpleInterest.toFixed(2);
      case 'compound':
        const amountAfterInterest = Number(principal) * Math.pow((1 + (Number(interestRate) / (36000))), (duration))
        const compoundInterest = amountAfterInterest - Number(principal);
        return compoundInterest.toFixed(2);
    }
}

console.log('Check =>>', generateInterest(10000000, 27, 7, 'simple'))