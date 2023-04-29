class Node {
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    let newNode = new Node(val)
    if(!this.root) {
      this.root = newNode
      return this
    } else {
      let currentNode = this.root
      while(true) {
        if(val === currentNode.value) return undefined;
        if(val < currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = newNode
            return this;
          }
          currentNode = currentNode.left
        } else if(val > currentNode.value) {
          if(!currentNode.right) {
            currentNode.right = newNode
            return this;
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  find(val) {
    if(!this.root) return false
    let currentNode = this.root
    let found = false
    while(currentNode && !found) {
      if(val === currentNode.val){
        found = true
      }
      else if(val > currentNode.val) {
        currentNode = currentNode.right
      } else {
        currentNode = currentNode.left
      }
    }
    return currentNode
  }

  // Traverse through an array by going through the horizontal levels step by step
  // STarting with the root
  breadthFirstSearch() {
    let queue = []
    let data = []
    let currentNode = this.root
    queue.push(currentNode)

    while(queue.length) {
      currentNode = queue.shift()
      data.push(currentNode.value)
      if(currentNode.left) {
        queue.push(currentNode.left)
      }
      if(currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return data
  }

  DFSPreOrder() {
    let data = []
    function traverse(node) {
      data.push(node.value)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}


let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.DFSPreOrder())