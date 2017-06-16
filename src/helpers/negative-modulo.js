module.exports = function negativeModulo (n, m) {
  return ((n % m) + m) % m
}
