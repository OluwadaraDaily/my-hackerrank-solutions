def count_unique_values(arr):
  numbers = {}
  left = 0
  right = len(arr) - 1
  while(left < right):
    if not arr[left] in numbers:
      numbers[arr[left]] = 1
    if not arr[right] in numbers:
        numbers[arr[right]] = 1
    left += 1
    right -= 1
  return len(numbers)



print(count_unique_values([1,2,3,4,5,6]))
print(count_unique_values([]))