const sumAll = function(a, b) {
  if (a < 0 || b < 0) return 'ERROR'
  if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'
  
  let sum = 0;
  let largestVal = b;
  let smallestVal = a;

  if (a > b) {
    smallestVal = b
    largestVal = a
  }

  for (let i = smallestVal; i <= largestVal; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
