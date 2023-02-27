def valid_anagrams(str1, str2):
  output = True
  str_1_obj = {}
  str_2_obj = {}
  for str in str1.lower():
    if str in str_1_obj:
      str_1_obj[str] += 1
    else:
      str_1_obj[str] = 0

  for str in str2.lower():
    if str in str_2_obj:
      str_2_obj[str] += 1
    else:
      str_2_obj[str] = 0
  
  for str in str1:
    if not str_1_obj[str] == str_2_obj[str]:
      return False
  
  return True


print(valid_anagrams('cinema', 'iceman'))