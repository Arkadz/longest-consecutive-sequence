module.exports = function longestConsecutiveLength(array) {
  array.sort((a, b) => a - b);
  let maxConsecutiveLength = 1;
  let temp = 1;
  if (array.length === 0) return 0;
  if (array.length === 1) return 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] + 1 === array[i]) maxConsecutiveLength += 1;
    else {
      if (temp < maxConsecutiveLength) temp = maxConsecutiveLength;
      maxConsecutiveLength = 1;
    }
  }
  return temp;
}
