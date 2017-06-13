const getTransform = require('../helpers/get-transform.js')

module.exports = {
  XYZ: value => {
    let valueArray = [ value.rho, value.gamma, value.beta ]

      // Inverse Bradford Transformation
    let Mbi = getTransform('INVERSE_BRADFORD')

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
