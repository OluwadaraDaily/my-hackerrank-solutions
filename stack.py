class Stack:
    # This is what is initialized when you create a new Stack
    def __init__(self):
        self.items = []
        # Initialize items of the stack to be empty (obviously)
    
    def push(self, item):
        self.items.append(item)
    
    def is_empty(self):
        # Check if the array is still empty (Returns true or false)
        return self.items == [] 
    
    def pop(self):
        self.items.pop()
    
    def peek(self):
        return self.items

stack = Stack()
stack.push("Yes")
print(stack.peek())