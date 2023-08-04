// An undirected Graph
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    // In the real world, check for duplicate keys
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(v1, v2) {
    if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2)
      this.adjacencyList[v2].push(v1)
    }
  }

  removeEdge(v1, v2) {
    if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((item) => item !== v2)
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((item) => item !== v1)
    }
  }

  removeVertex(vertex) {
    if(this.adjacencyList[vertex]) {
      const vertexArr = this.adjacencyList[vertex]
      for(const edge of vertexArr) {
        this.removeEdge(edge, vertex)
      }
      delete this.adjacencyList[vertex]
    }
  }

  DFSRecursive(start) {
    const result = []
    const visited = {}
    let adjacencyList = this.adjacencyList

    const dfs = (vertex) => {
      console.log('Vertex ->', vertex)
      if(!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach((neighbor) => {
        if(!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    }

    dfs(start)

    return result
  }

  DFSIterative(start) {
    const stack  = [start]
    const result = []
    const visited = {}
    let currentVertex

    visited[start] = true

    while(stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return result
  }

  BFS(start) {
    const queue = [start]
    const visited = {}
    const result = []

    visited[start] = true

    let currentVertex
    while(queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }

    return result
  }
}


const g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log('RESULT ->', g.DFSRecursive("A"))
console.log('RESULT 2 ->', g.DFSIterative("A"))
console.log('RESULT 3 ->', g.BFS("A"))
