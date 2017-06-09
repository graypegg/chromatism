const convert = require('../operations/convert.js')
const helpers = require('../helpers.js')

function fromLms(to, value) {
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
		var XYZ = convert("XYZ", value)
		return convert(to, XYZ)

	}
}

module.exports = fromLms
