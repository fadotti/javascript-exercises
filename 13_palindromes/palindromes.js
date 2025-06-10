const palindromes = function (string) {
  let newString = string.toLowerCase();
  let stringAsArray = newString.split("");
  let filteredString = stringAsArray.filter((character) => {
    return (character == "!" || character == "." || character == " " || character == ",") ? false : true
  })

  let output = filteredString.reduce((accumulator, currentValue, currentIndex, array) => {
    if(accumulator == false) {
      return false
    } else {
      return (currentValue == array[array.length - 1 - currentIndex]) ? true : false
    }
  }, true)

  return output
};

// Do not edit below this line
module.exports = palindromes;
