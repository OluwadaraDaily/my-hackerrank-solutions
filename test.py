def recursiveFunction(num):
    if num == 0:
        print("Recursion done!")
    else:
        print(num) 
        recursiveFunction(num-1)

def test():
    a = 'Yemisi'
    return a

if __name__ == "__main__":
    test()