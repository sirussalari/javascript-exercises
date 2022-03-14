const reverseString = function(str) {
    let reverse = '';
    const length = str.length - 1;
    for (let i = length; i > -1; i--) {
        reverse += str[i];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
