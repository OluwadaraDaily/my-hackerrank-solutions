def counting_sort(arr):
    maximum = len(arr)
    newArr = [0] * maximum
    # sortedArr = []
    for item in arr:
        newArr[item] += 1
    
    # for index,item in enumerate(newArr):
    #     arr = [index] * item
    #     sortedArr += arr
    return newArr

print(counting_sort([1,2,3,4,9,2,0,4,6]))
print(counting_sort([1,1,3,3,2,2,5]))