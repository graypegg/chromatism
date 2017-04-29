function fromLMS( { conversions, operations, helpers }, to, value ) {
	switch (to){
    case "XYZ":
      let valueArray = [ value.rho, value.gamma, value.beta ]

      // Bradford Transformation
      let Mb = [
        [ 0.8951000, 0.2664000, -0.1614000 ],
        [ -0.7502000, 1.7135000, 0.0367000 ],
        [ 0.0389000, -0.0685000, 1.0296000 ]
      ]

      let resultArray = Mb.map((m) => {
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
