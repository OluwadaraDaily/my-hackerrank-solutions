const lonelyInteger = (arr) => {
  let lonelyInteger
  const duplicatedNums = arr.filter((item, index) => arr.indexOf(item) !== index)
  arr.forEach((item) => {
    const found = duplicatedNums.find(keyItem => item === keyItem)
    if(!found) lonelyInteger = item
  })
  return lonelyInteger
}

lonelyInteger([1,2,3,4,3,2,1])