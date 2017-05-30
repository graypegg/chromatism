function fromLms( { conversions, operations, helpers }, to, value ) {
  switch (to) {

    case "XYZ":
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

    default:
      var XYZ = operations.convert({ conversions, operations, helpers }, "XYZ", value);
      return operations.convert({ conversions, operations, helpers }, to, XYZ);

  }
}

module.exports = fromLms;
