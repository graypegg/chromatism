const makeColourObject = require('./convert.js')
const convert = require('../helpers/convert-to-type.js')

function saturation(shift, colourRef) {
	var colour = convert("hsl", colourRef)

	colour.s += shift
	if (colour.s < 0) {
		colour.s = 0
	} else if (colour.s > 100) {
		colour.s = 100
	}

	return makeColourObject(colour)
}

module.exports = saturation
