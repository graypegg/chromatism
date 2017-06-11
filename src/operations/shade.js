const makeColourObject = require('./convert.js')
const convert = require('../helpers/convert-to-type.js')

function shade(shift, colourRef) {
	var colour = convert("hsv", colourRef)

	colour.v += shift
	if (colour.v < 0) {
		colour.v = 0
	} else if (colour.v > 100) {
		colour.v = 100
	}

	return makeColourObject(colour)
}

module.exports = shade
