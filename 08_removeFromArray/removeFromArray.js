const removeFromArray = function(...args) {
    let output = args[0];
    let toDelete = args.slice(1);
    for(const argument of toDelete) {
        output = output.filter(item => item !== argument);
    }
    return output
};

// Do not edit below this line
module.exports = removeFromArray;
