const sumAll = function(firstInt, secondInt) {
    let sum = null;
    let range = null;
    if (firstInt > secondInt) {
        sum = secondInt;
        range = firstInt;
    }
    else {
        sum = firstInt;
        range = secondInt;
    }
    for (let i = (sum + 1); i < (range + 1); i++) {
        sum += i;
    }
    if (typeof firstInt !== 'number' || typeof secondInt !== 'number') {
        return 'ERROR'
    }
    else if (firstInt > 0 && secondInt > 0) {
        return sum;
    }
    else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
