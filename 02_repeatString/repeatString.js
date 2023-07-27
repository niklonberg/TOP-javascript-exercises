const repeatString = function(str, amt) {
  if (amt < 0) return 'ERROR'
  let repeatedPhrase = '';

  for (let i = 1; i < amt; i++) {
    repeatedPhrase += str
  }
  return repeatedPhrase
};

// Do not edit below this line
module.exports = repeatString;
