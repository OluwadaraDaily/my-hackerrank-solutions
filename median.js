const findMedian = (arr) => {
  // Sort an array
  arr.sort()
  // Find the median
  const length = arr.length
  let medianPos
  length % 2 ? medianPos = (length - 1) / 2 : medianPos = length / 2

  console.log('Check =>', arr[medianPos])
  return arr[medianPos]
}

findMedian([1,1,1,1,4,5,9,6,9,0,3])