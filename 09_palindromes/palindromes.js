const palindromes = function (text) {
  const cleanedStrArr = Array.from(text.toLowerCase().replace(/[^a-z0-9]/g, ""));
  const reversedStrArr = cleanedStrArr.slice().reverse();

  console.log(cleanedStrArr);
  console.log(reversedStrArr);

  return cleanedStrArr.toString() === reversedStrArr.toString()
};

// Do not edit below this line
module.exports = palindromes;
