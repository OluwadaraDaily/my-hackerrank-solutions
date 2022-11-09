# Resource => https://www.youtube.com/watch?v=JlMyYuY1aXU
# A linked list consists of nodes that consist of a data and a pointer to either the address of
# the next element or its content

class node:
    def __init__(self, data=None):
        self.data = data
        self.next = None


# Head Node points to the first node in the linked list and contains no data
# 

class linked_list:
    def __init__(self):
        self.head = node()
        