const sumAll = function(a, b) {
    if(typeof a != "number" || typeof b != "number") return 'ERROR'
    if(a < 1 || b < 1) return 'ERROR'
    if(!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'
    let accumulator = 0;
    let minimum = Math.min(a, b);
    let maximum = Math.max(a, b);
    for(let i = minimum; i <= maximum; i++) {
        accumulator += i;
    }
    return accumulator
};

// Do not edit below this line
module.exports = sumAll;
