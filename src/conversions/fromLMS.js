function fromLMS( { conversions, operations, helpers }, to, value ) {
	switch (to){
    case "XYZ":
      let valueArray = [ value.rho, value.gamma, value.beta ]

      // Inverse Bradford Transformation
      let Mbi = [
        [ 0.9869929, -0.1470543, 0.1599627 ],
        [ 0.4323053, 0.5183603, 0.0492912 ],
        [ -0.0085287, 0.0400428, 0.9684867 ]
      ]

      let resultArray = Mbi.map((m) => {
        return valueArray.reduce((acc, v, key) => {
          return (m[key] * v) + acc
        }, 0)
      })

      return {
        X: resultArray[0],
        Y: resultArray[1],
        Z: resultArray[2]
      }

      break;
		default:
      var XYZ = operations.convert({ conversions, operations, helpers }, "XYZ", value);
      return operations.convert({ conversions, operations, helpers }, to, XYZ);
      break;
	}
}

module.exports = fromLMS;
