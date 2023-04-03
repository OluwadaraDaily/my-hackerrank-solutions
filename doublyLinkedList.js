class Node {
  constructor(val) {
    this.prev = null
    this.next = null
    this.val = val
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if(!this.head) return undefined
    let poppedNode = this.tail
    if(this.length === 1) {
      this.head = null
      this.tail = null
    }
    else {
      this.tail = poppedNode.prev
      poppedNode.prev = null
      this.tail.next = null
    }
    this.length--
    return poppedNode
  }

  shift() {
    if(!this.head) return undefined
    let shiftedNode = this.head
    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shiftedNode.next
      this.head.prev = null
      shiftedNode.next = null
    }
    this.length-- 
    return shiftedNode
  }

  unshift(val) {
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    if(index < 0 || index >= this.length) return null
    let currentNode = this.head
    if(index <=  this.length / 2) {
      let count = 0
      while(count !== index) {
        currentNode = currentNode.next
        count++
      }
    } else {
      let count = this.length - 1
      currentNode = this.tail
      while(count !== index) {
        currentNode = currentNode.prev
        count--
      }
    }
    return currentNode
  }

  set(index, value) {
    let node = this.get(index)
    if(node) {
      node.val = value
      return true
    }
    return false
  }

  insert(index, value) {
    if(index < 0 || index > this.length) return false
    if(index === 0) {
      return !!this.unshift(value)
    }
    if(index === this.length) {
      return !!this.push(value)
    }
    let newNode = new Node(value)
    let presentNode = this.get(index - 1)
    let nextNode = presentNode.next
    presentNode.next = newNode
    newNode.prev = presentNode
    newNode.next = nextNode
    nextNode.prev = newNode

    this.length++
    return true
  }

  remove(index) {
    if(index < 0 || index >= this.length) return false
    if (index === 0) return this.shift()
    if(index === this.length - 1) return this.pop()
    let removedNode = this.get(index)
    let prevNode = removedNode.prev
    let nextNode = removedNode.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
    removedNode.next = null
    removedNode.prev = null

    this.length--
    return removedNode
  }

}
