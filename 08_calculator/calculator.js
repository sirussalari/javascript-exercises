const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  for (let num of arr) {
    result *= num;
  }
  return result;
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(x) {
	fac = 1;
  for (let i = 2; i < (x + 1); i++) {
    fac *= i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
