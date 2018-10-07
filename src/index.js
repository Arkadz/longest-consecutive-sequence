module.exports = function longestConsecutiveLength(array) {
  
  if(array.length == 0) {
    return 0;
  }
  var info = {current: null, currentConsLength : 1, maxConsLength : 1};


  var set = new Set(array);
  //for (let item of set.values()) console.log(item);

  var countConsLengthWithSet = function(set, info) {
    for (let item of set.values()) {
      var currentNumber;
      info.current = item;
      currentNumber = info.current - 1;
      set.delete(item)
      while(set.has(currentNumber)) {
        info.currentConsLength++;
        set.delete(currentNumber--);
      }
      currentNumber = info.current + 1;
      while(set.has(currentNumber)) {
        info.currentConsLength++;
        set.delete(currentNumber++);
      }
      if(info.currentConsLength > info.maxConsLength) {
        info.maxConsLength = info.currentConsLength;
      }
      info.currentConsLength = 1;
      break;
    }
  }

  while(set.size != 0) {
    //console.log(set.length);
    countConsLengthWithSet(set, info);
    
  }
  return info.maxConsLength;

  
}



