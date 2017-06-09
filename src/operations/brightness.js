const helpers = require('../helpers')
const convert = require('./convert')

function brightness(shift, colourRef) {
	var colour = convert("hsl", colourRef)

	colour.l += shift
	if (colour.l < 0) {
		colour.l = 0
	} else if (colour.l > 100) {
		colour.l = 100
	}

	return helpers.ready(colour)
}

module.exports = brightness
