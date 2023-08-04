// Implement a priority queue such that the lower priority is lower in the queue

class NaivePriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }

  dequeue() {
    return this.values.shift()
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

module.exports = NaivePriorityQueue
