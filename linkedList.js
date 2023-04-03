class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newVal = new Node(val)
    if(!this.head) {
      this.head = newVal
      this.tail = this.head
    } else {
      this.tail.next = newVal
      this.tail = newVal
    }
    this.length++
    return this
  }

  pop() {
    if(!this.head) return undefined
    let current = this.head
    let newTail = current

    while(current.next !== null) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if(!this.head) return undefined
    let current = this.head
    this.head = current.next
    if(this.length === 0) {
      this.tail = null
    }
    this.length--

    return current
  }

  unshift(val) {
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newVal.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    if(index < 0 || index >= this.length) {
      return null
    }
    let node = this.head
    let count = 0
    while(count < index) {
      node = node.next
      count++
    }
    return node
  }

  set(index, val) {
    let foundNode = this.get(index)
    if(foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }

  insert(index, val) {
    if(index < 0 || index > this.length) return false
    if(index === 0) return !!this.unshift(val)
    if(index === this.length) return !!this.push(val)

    let newNode = new Node(val)
    let prevNode = this.get(index - 1)
    let nextNode = prevNode.next
    prevNode.next = newNode
    newNode.next = nextNode
    this.length++
    return true
  }

  remove(index) {
    if(index < 0 || index >= this.length) return undefined
    if(index === 0) return this.shift()
    if(index === this.length - 1) return this.pop()
    
    let prevNode = this.get(index - 1)
    let removedNode = prevNode.next
    prevNode.next = currentNode.next

    this.length--
    return removedNode
  }

  reverse() {
    this.tail = this.head
    let currentNode = this.head
    let prevNode = null
    
    while(currentNode.next) {
      let temp = currentNode.next
      currentNode.next = prevNode
      prevNode = currentNode
      currentNode = temp
    }
    currentNode.next = prevNode
    this.head = currentNode
    return this
  }
  print() {
    let arr = []
    let current = this.head
    while(current.next) {
      arr.push(current.val)
      current = current.next
    }
    arr.push(current.val)
    console.log('ARR =>', arr)
  }
}

let list = new SinglyLinkedList()

list.push("I")
list.push("AM")
list.push("A")
list.push("FIGHTER")
list.push("!")

list.print()
list.reverse()
list.print()
// console.log("LIST =>", list)
// console.log("LIST =>", list.set(4, "MEEEEEEEEEE"))
// console.log("LIST =>", list)
// console.log("LIST =>", list.reverse())
