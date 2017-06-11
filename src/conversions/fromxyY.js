module.exports = {
  XYZ: value => {
    const { x, y, Y } = value
    const X = (Y / y) * x
    const Z = (Y / y) * ((1 - x) - y)

    return {
      X,
      Y,
      Z
    }
  }
}
