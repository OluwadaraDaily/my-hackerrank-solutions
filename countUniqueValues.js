function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  if(!arr.length) {
      return 0;
  }
  if(arr.length === 1) {
      return 1;
  }
  let trailingPointer = 0;
  let leadingPointer = 1;
  while(leadingPointer <= (arr.length - 1)) {
    if(arr[trailingPointer] === arr[leadingPointer]) {
        leadingPointer += 1;
    }
    else {
        trailingPointer += 1
        arr[trailingPointer] = arr[leadingPointer]
    }
  }
  return trailingPointer += 1
}