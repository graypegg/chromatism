import getTransform from '../helpers/get-transform'

export default {
  XYZ: value => {
    const valueArray = [ value.rho, value.gamma, value.beta ]

    // Inverse Bradford Transformation
    const Mbi = getTransform('INVERSE_BRADFORD')

    const resultArray = Mbi.map((m) => {
      return valueArray.reduce((acc, v, key) => (m[key] * v) + acc, 0)
    })

    return {
      X: resultArray[0] * 100,
      Y: resultArray[1] * 100,
      Z: resultArray[2] * 100
    }
  }
}
