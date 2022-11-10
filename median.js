const findMedian = (arr) => {
  // Sort an array
  const sortedArr = arr.sort((a, b) => {return a - b});
  // Find the median
  const length = sortedArr.length
  let medianPos = (length - 1) / 2

  console.log('Check =>', sortedArr[medianPos])
  return sortedArr[medianPos]
}

findMedian([1,2,3,4,5,6,7,8,9])