class Node {
  constructor(priority) {
    this.val = null
    this.priority = priority
  }
}
class PriorityQueue {
  constructor() {
    this.values = []
  }
  bubbleUp(node) {
    this.values.push(node)
    
  }
  enqueue(priority) {
    const node = new Node(priority)
    this.bubbleUp(node)
  }
}