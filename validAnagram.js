function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if(str1.length !== str2.length) {
      return false
  }
  let objOne = {};
  
  for(const char of str1) {
    objOne[char] = (objOne[char] || 0) + 1;
  }
  for(const char of str2) {
    if (!objOne[char]) {
        return false;
    } else {
      objOne[char] -= 1
    }
  }
  return true; 
}