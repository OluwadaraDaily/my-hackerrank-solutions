const PriorityQueue = require('../priorityQueue.js')
const NaivePriorityQueue = require('./naivePriorityQueue.js')

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    // In the real world, check for duplicate keys
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(v1, v2, weight) {
    if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push({ node: v2, weight })
      this.adjacencyList[v2].push({ node: v1, weight })
    }
  }

  // Find the shortest path between two nodes in a weighted graph
  Dijkstra(start, finish) {
    const nodes = new NaivePriorityQueue()
    const distances = {}  // This is to store shortest distance between the node (key) and the start node
    const previous = {}   // This is to store the immediate previous shortest path node

    let path = []         // This is an array that concats path from start to finish, node by node
    let smallest

    // Initial State
    for(let vertex in this.adjacencyList) {
      if(vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }

    // As long as there is a node in the priority queue
    while(nodes.values.length) {
      smallest = nodes.dequeue().val
      if(smallest === finish) {
        while(previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break;
      }
      if(smallest || distances[smallest] !== Infinity) {
        for(let neighbor in this.adjacencyList[smallest]) {
          // Find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]

          // Calculate new distance from start to nextNode
          let newDistance = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node

          if(newDistance < distances[nextNeighbor]) {
            // update distance of next neighbor
            distances[nextNeighbor] = newDistance

            // update previous node of nextNode
            previous[nextNeighbor] = smallest

            // enqueue in priority queue, the new priority (distance)
            nodes.enqueue(nextNeighbor, newDistance)
          }

        }
      }
    }

    return path.concat(smallest).reverse()
  }
}


const wGraph = new WeightedGraph()
wGraph.addVertex("A")
wGraph.addVertex("B")
wGraph.addVertex("C")
wGraph.addVertex("D")
wGraph.addVertex("E")
wGraph.addVertex("F")

wGraph.addEdge("A", "B", 4)
wGraph.addEdge("A", "C", 2)
wGraph.addEdge("B", "E", 3)
wGraph.addEdge("C", "D", 2)
wGraph.addEdge("C", "F", 4)
wGraph.addEdge("D", "E", 3)
wGraph.addEdge("D", "F", 1)
wGraph.addEdge("E", "F", 1)

console.log('Shortest Path ->', wGraph.Dijkstra("A", "E"))
