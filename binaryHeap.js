class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2)
    if (parentIndex < 0 || this.values[parentIndex] >= this.values[index]) return
    [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]]
    this.bubbleUp(parentIndex)
  }

  // Insert at the end of the array, then bubble up by swapping
  // To find parent of a node, Math.floor((n - 1) / 2)
  // To find the child of a node (2n + 1) [LEFT NODE]
  // (2n + 2) [RIGHT NODE]
  insert(val) {
    this.values.push(val)
    this.bubbleUp(this.values.length - 1)
  }

  sinkDown(index) {
    const childIndexOne = (2 * index) + 1
    const childIndexTwo = (2 * index) + 2
    const currentItem = this.values[index]
    const childOne = this.values[childIndexOne]
    const childTwo = this.values[childIndexTwo]
    if (!childOne || !childTwo) return;
    let newIndex
    if (childOne > currentItem && childTwo > currentItem) {
      if (childOne > childTwo) {
        [this.values[index], this.values[childIndexOne]] = [this.values[childIndexOne], this.values[index]]
        newIndex = childIndexOne
      } else {
        [this.values[index], this.values[childIndexTwo]] = [this.values[childIndexTwo], this.values[index]]
        newIndex = childIndexTwo
      }
    } else if (childOne > currentItem) {
      [this.values[index], this.values[childIndexOne]] = [this.values[childIndexOne], this.values[index]]
      newIndex = childIndexOne
    } else if (childTwo > currentItem) {
      [this.values[index], this.values[childIndexTwo]] = [this.values[childIndexTwo], this.values[index]]
      newIndex = childIndexTwo
    }
    this.sinkDown(newIndex)
  }

  // This function removes the hightest value (the root) of the heap
  // Swaps it with the minimum and then rearranges the heap starting from the new root
  // Swaps each node with any of its children that is bigger than it by the biggest margin between the two
  // And so on...
  extractMax() {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]]
    const oldRoot = this.values.pop()
    this.sinkDown(0)
    return oldRoot
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(54)
heap.insert(40)
heap.insert(90)
console.log('HEAP ->', heap.values)
heap.extractMax()
console.log('HEAP 2 ->', heap.values)


