const fibonacci = (num) => {
  if(num <= 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

const memoizedFibonacci = (num, memory = []) => {
  if(memory[num] !== undefined) return memory[num]
  if(num <= 2) return 1
  const answer = memoizedFibonacci(num - 1, memory) + memoizedFibonacci(num - 1, memory)
  memory[num] = answer
  return answer
}

const tabFibonacci = (num) => {
  if(num <= 2) return 1
  let fibNums = [0, 1, 1]

  for(let i = 3; i <= num; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
  }

  return fibNums[num]
}

console.log('FIBONACCI ->', tabFibonacci(1000))
