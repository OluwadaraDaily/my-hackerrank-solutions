def diagonal_difference(arr):
    ltr_diagonal = 0
    rtl_diagonal = 0
    leftMarker = 0
    rightMarker = len(arr) - 1
    # Loop through the array
    for i in range(len(arr)):
        ltr_diagonal += arr[i][leftMarker]
        rtl_diagonal += arr[i][rightMarker]
        leftMarker += 1
        rightMarker -= 1

    
    absDifference = abs(rtl_diagonal - ltr_diagonal)
    return absDifference

print(diagonal_difference([
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]))