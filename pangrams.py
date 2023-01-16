def isPangram(pangram):
    # Write your code here
    # Define all alphabets
    alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    answer = ''
    
    for str in pangram:    
      can_find_all_alphabets = True
      index = 0
      while can_find_all_alphabets:
        if index < 0 or index > (len(alphabets) - 1):
          can_find_all_alphabets = False

        elif alphabets[index] not in str:
          answer += '0'
          can_find_all_alphabets = False
  
        elif index > (len(alphabets) - 2) and can_find_all_alphabets is True:
          answer += '1'
          can_find_all_alphabets = False
        index += 1
    return answer


print(isPangram([
  'pack my box with five dozen liquor jugs',
  'this is not a pangram'
]))