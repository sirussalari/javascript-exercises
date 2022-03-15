const ftoc = function(tempF) {
  let c = (5 * (tempF -32)) / 9;
  const intC = Math.floor(c);
  const decimals = c - intC;
  const rounded = Math.round(10 * decimals);
  const tenth = rounded / 10;
  c = intC + tenth;
  return c;
};

const ctof = function(tempC) {
  let f = ((9 * tempC) + 160) / 5;
  const intF = Math.floor(f);
  const decimals = f - intF;
  const rounded = Math.round(10 * decimals);
  const tenth = rounded / 10;
  f = intF + tenth;
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
