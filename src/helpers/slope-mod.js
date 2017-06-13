module.exports = function slopeMod (n, m) {
  if (n > (m * 2)) {
    return slopeMod(n - (m * 2), m)
  } else if (n > m) {
    return (m * 2) - n
  } else if (n < 0) {
    return slopeMod(n + (m * 2), m)
  } else {
    return n
  }
}
