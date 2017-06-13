module.exports = function cubeRoot (x) {
  if (!Math.cbrt) {
    var y = Math.pow(Math.abs(x), 1 / 3)
    return x < 0 ? -y : y
  } else {
    return Math.cbrt(x)
  }
}
