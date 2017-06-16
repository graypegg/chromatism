module.exports = function bounded (val, range) {
  if (val < range[0]) {
    val = range[0]
  } else if (val > range[1]) {
    val = range[1]
  }
  return val
}
