def same(arr1, arr2):
  output = True
  for item in arr1:
    if item**2 in arr2:
      index = arr2.index(item**2)
      del arr2[index]
    else:
      output = False
      break
            
  return output


print(same([1,2,3], [4,1,9]))
print(same([1,2,3], [1,9]))
print(same([1,2,1], [4,4,1]))