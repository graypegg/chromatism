const convert = require('../operations/convert.js')

function fromxyY(to, value) {
	switch (to) {
    /**
     * xyY is really just XYZ without tristimulus values.
     * Instead, the chroma. coords. are used in conjuction with the luminance from XYZ
     */
	case "XYZ":
		let X = (value.Y / value.y) * value.x
		let Z = (value.Y / value.y) * ((1 - value.x) - value.y)

		return {
			X,
			Y: value.Y,
			Z
		}

	default:
		var XYZ = convert("XYZ", value)
		return convert(to, XYZ)

	}
}

module.exports = fromxyY
