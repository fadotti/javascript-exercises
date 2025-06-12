const fibonacci = function(input) {
    switch(true) {
        case input == 0:
            return 0
        case input < 0:
            return "OOPS"
        case input < 3:
            return 1
        default:
            let fibonacciArray = [1, 1];
            for(let i = 2; i < input; i++) {
                fibonacciArray.push(fibonacciArray[i-2] + fibonacciArray[i-1])
            }
            return fibonacciArray[input - 1]
    }

};

// Do not edit below this line
module.exports = fibonacci;
