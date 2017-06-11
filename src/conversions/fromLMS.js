const helpers = require('../helpers.js')

module.exports = {
  XYZ: value => {
    let valueArray = [ value.rho, value.gamma, value.beta ]

      // Inverse Bradford Transformation
    let Mbi = helpers.getTransform('INVERSE_BRADFORD')

    let resultArray = Mbi.map((m) => {
      return valueArray.reduce((acc, v, key) => {
        return (m[key] * v) + acc
      }, 0)
    })

    return {
      X: resultArray[0] * 100,
      Y: resultArray[1] * 100,
      Z: resultArray[2] * 100
    }
  }
}
