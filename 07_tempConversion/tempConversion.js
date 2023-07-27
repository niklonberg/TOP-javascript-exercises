const convertToCelsius = function(temp) {
  const calcCelsius = 5/9 * (temp - 32)
  return Number(calcCelsius.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  const calcFahren = temp * (9/5) + 32;
  console.log(calcFahren)
  return Number(calcFahren.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
