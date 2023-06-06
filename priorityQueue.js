// Implementation of a min binary heap as a priority queue
// This means that nodes with lower figure of priority have a higher priortity
// and vice versa
class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}
class PriorityQueue {
  constructor() {
    this.values = []
  }
  bubbleUp(nodeIndex) {
    const parentNodeIndex = Math.floor((nodeIndex - 1) / 2)
    if (parentNodeIndex < 0 || this.values[parentNodeIndex].priority <= this.values[nodeIndex].priority) return
    [this.values[nodeIndex], this.values[parentNodeIndex]] = [this.values[parentNodeIndex], this.values[nodeIndex]]
    this.bubbleUp(parentNodeIndex)
  }
  enqueue(value, priority) {
    const node = new Node(value, priority)
    this.values.push(node)
    this.bubbleUp(this.values.length - 1)
  }
  sinkDown(index) {
    const childIndexOne = (2 * index) + 1
    const childIndexTwo = (2 * index) + 2
    const currentNode = this.values[index]
    const childOne = this.values[childIndexOne]
    const childTwo = this.values[childIndexTwo]
    if (!childOne || !childTwo) return;
    let newIndex
    if (childOne.priority < currentNode.priority && childTwo.priority < currentNode.priority) {
      if (childOne < childTwo) {
        [this.values[index], this.values[childIndexOne]] = [this.values[childIndexOne], this.values[index]]
        newIndex = childIndexOne
      } else {
        [this.values[index], this.values[childIndexTwo]] = [this.values[childIndexTwo], this.values[index]]
        newIndex = childIndexTwo
      }
    } else if (childOne < currentNode) {
      [this.values[index], this.values[childIndexOne]] = [this.values[childIndexOne], this.values[index]]
      newIndex = childIndexOne
    } else if (childTwo < currentNode) {
      [this.values[index], this.values[childIndexTwo]] = [this.values[childIndexTwo], this.values[index]]
      newIndex = childIndexTwo
    }
    this.sinkDown(newIndex)
  }
  dequeue() {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]]
    const oldRoot = this.values.pop()
    this.sinkDown(0)
    return oldRoot
  }
}


const pq1 = new PriorityQueue()
pq1.enqueue("Common cold", 5)
pq1.enqueue("Labour", 0)
pq1.enqueue("High fever", 2)

console.log('PQ ->', pq1)

console.log('hERE ->', pq1.dequeue())
console.log('hERE ->', pq1.dequeue())
console.log('hERE ->', pq1.dequeue())
console.log('hERE ->', pq1.dequeue())