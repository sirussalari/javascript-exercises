const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS";
    }
    else {
        let fib = [1,1];
        for(let i = 0; i < (index - 2); i++) {
        fib[fib.length] = fib[fib.length - 1] + fib[fib.length - 2];
    }
        return fib[fib.length - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
