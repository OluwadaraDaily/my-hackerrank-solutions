def printLinkedList(head):
    node = head
    while node is not None:
        print(f'{node.data}')
        node = node.next
    
