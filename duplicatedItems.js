// [1, 4, 5, 1, 7, 4, 1, 8, 10]

const findDup = (arr) => {
    let _arr = arr
    let newArr = []
    for(let i = 0; i < _arr.length; i++) {
        // Remove arr[i] from arr
        const index = _arr.indexOf(_arr[i])
        const itemRemoved = _arr.splice(index, 1)
        // find if another element of the same value is in the remainder of arr
        // If yes, then it is a duplicate
        const foundExtra = _arr.find(item => item === itemRemoved[0])
        if(foundExtra !== undefined) {
            // Push into newArr
            newArr.push(itemRemoved[0])
            newArr = [...new Set(newArr)]
        }
        _arr.splice(index, 0, itemRemoved[0])
    }
    return newArr
}

const findDup2 = (arr) => {
  const duplicatedNums = arr.filter((item, index) => arr.indexOf(item) !== index)
  return [...new Set(duplicatedNums)]
}

// console.log('Result =>', findDup([1,2,3,2,1]))
console.log('Result =>', findDup2([1, 4, 5, 1, 7, 4, 1, 8, 10]))
