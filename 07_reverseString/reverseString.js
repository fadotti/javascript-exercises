const reverseString = function(string) {
    let splittedString = string.split('');
    let output = '';
    for(i = splittedString.length - 1; i >= 0; i--) {
        output += splittedString[i];
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
