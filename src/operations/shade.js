const helpers = require('../helpers')
const convert = require('./convert')

function shade(shift, colourRef) {
	var colour = convert("hsv", colourRef)

	colour.v += shift
	if (colour.v < 0) {
		colour.v = 0
	} else if (colour.v > 100) {
		colour.v = 100
	}

	return helpers.ready(colour)
}

module.exports = shade
